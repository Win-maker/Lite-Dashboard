export async function fetchChannelsApi() {
  const res = await fetch("https://your-api/channels");
  if (!res.ok) throw new Error("API failed");
  return res.json();
}
