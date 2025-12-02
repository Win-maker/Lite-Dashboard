import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Spinner,
  Text,
  Button,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { ChartComponent } from "./ChartComponent";
import { channelService } from "@/indexedDb/services/channelService";
import { type ChartData } from "./types/data";

type ChartType = "bar" | "pie" | "line";

interface Summary {
  label: string;
  total: number;
}

export const Dashboard: React.FC = () => {
  const [shopSummary, setShopSummary] = useState<Summary[]>([]);
  const [categorySummary, setCategorySummary] = useState<Summary[]>([]);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [loading, setLoading] = useState(true);
  const [recordCount, setRecordCount] = useState(0);

  useEffect(() => {
    loadDashboardData();
  }, []);

  function prepareSummaries<T>(
    items: T[],
    getAmount: (item: T) => number,
    getPrimaryKey: (item: T) => string,
    getSecondaryKey?: (item: T) => string
  ) {
    const primaryMap: Record<string, number> = {};
    const secondaryMap: Record<string, number> = {};

    items.forEach((item) => {
      const amount = getAmount(item);
      const primaryKey = getPrimaryKey(item);

      // Primary summary
      primaryMap[primaryKey] = (primaryMap[primaryKey] || 0) + amount;

      // Optional secondary summary
      if (getSecondaryKey) {
        const secondaryKey = getSecondaryKey(item);
        secondaryMap[secondaryKey] = (secondaryMap[secondaryKey] || 0) + amount;
      }
    });

    return {
      primarySummary: Object.entries(primaryMap).map(([label, total]) => ({
        label,
        total,
      } )),
      secondarySummary: Object.entries(secondaryMap).map(([label, total]) => ({
        label,
        total,
      })),
      count: items.length,
    };
  }

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const channels = await channelService.loadChannels();
      if (!channels || channels.length === 0) return;
      // console.log("this is return from api", channels);
      const result = prepareSummaries<Channel>(
        channels,
        (ch) => ch.teamAmount * 1000, 
        (ch) => ch.channelName, 
        (ch) => `Branch ${ch.branchId}` 
      );

      setShopSummary(result.primarySummary);
      setCategorySummary(result.secondarySummary);
      setRecordCount(result.count);
    } catch (err) {
      console.error("Error loading dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  const prepareChartData = (data: Summary[]): ChartData => ({
    labels: data.map((d) => d.label),
    datasets: [
      {
        label: "Sales Amount",
        data: data.map((d) => d.total),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ].slice(0, data.length),
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ].slice(0, data.length),
        borderWidth: 2,
      },
    ],
  });

  if (loading)
    return (
      <Center h="100vh" flexDir="column" w="100vw">
        <Spinner size="xl" />
        <Text mt={4}>Loading dashboard... ({recordCount} records)</Text>
      </Center>
    );

  return (
    <Box p={6} bg="gray.50" minH="100vh" minW="100vw">
      {/* Header */}
      <Flex justify="space-between" align="center" mb={6} flexWrap="wrap">
        <Heading as="h1" size="lg" mb={{ base: 2, md: 0 }}>
          Sales Dashboard
        </Heading>

        <Flex align="center" gap={4}>
          <Text>
            Total Records: <b>{recordCount}</b>
          </Text>

          {/* Native HTML Select */}
          <Box>
            <select
              value={chartType}
              onChange={(e) => setChartType(e.target.value as ChartType)}
              style={{
                width: "120px",
                padding: "0.4rem",
                borderRadius: "6px",
                border: "1px solid #CBD5E0",
              }}
            >
              <option value="bar">Bar</option>
              <option value="pie">Pie</option>
              <option value="line">Line</option>
            </select>
          </Box>

          <Button colorScheme="teal" onClick={loadDashboardData}>
            Refresh Data
          </Button>
        </Flex>
      </Flex>

      {/* Charts */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Box bg="white" p={4} borderRadius="md" shadow="md">
          <Heading size="md" mb={4}>
            Sales by Channel
          </Heading>
          <ChartComponent
            chartData={prepareChartData(shopSummary)}
            chartType={chartType}
            title="Channel Sales"
          />
        </Box>

        <Box bg="white" p={4} borderRadius="md" shadow="md">
          <Heading size="md" mb={4}>
            Sales by Branch
          </Heading>
          <ChartComponent
            chartData={prepareChartData(categorySummary)}
            chartType={chartType}
            title="Branch Sales"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};
