fetch("/api/authenticate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ merchantCode, secureHash }),
  });
  