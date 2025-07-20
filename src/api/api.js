export async function getData(endpoint) {
  let result = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`).then(
    (response) => response.json()
  );
  return result;
}
