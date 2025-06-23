export async function fetchConversationSummariesFromAPI() {
  const response = await fetch('http://localhost:8000/chat/summaries/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.summaries;
}
