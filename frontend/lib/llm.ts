const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

async function post(endpoint: string, body: Record<string, unknown>) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Pattern 1: IntentDrivenUI
export async function intentDrivenUI(userText: string, currentRoute = "/") {
  return post("/llm/intent-ui", { user_text: userText, current_route: currentRoute });
}

// Pattern 2: SchemaToComponent
export async function schemaToComponent(tableName: string, schemaFields: unknown[]) {
  return post("/llm/schema-component", { table_name: tableName, schema_fields: schemaFields });
}

// Pattern 3: PredictiveOrchestration
export async function predictiveOrchestrate(userId: string, recentActions: unknown[] = []) {
  return post("/llm/predict", { user_id: userId, recent_actions: recentActions });
}

// Pattern 4: ChatGovernance
export async function chatGovernance(message: string, userWallet: string, threadId?: string) {
  return post("/llm/governance-chat", { message, user_wallet: userWallet, thread_id: threadId });
}

// Pattern 5: MultimodalProof
export async function verifyProof(taskId: string, mediaB64: string, mimeType: string, submitterWallet?: string) {
  return post("/llm/verify-proof", { task_id: taskId, media_b64: mediaB64, mime_type: mimeType, submitter_wallet: submitterWallet });
}

// Pattern 6: AgentSwarmProxy
export async function agentSwarmProxy(userMessage: string, userWallet?: string, context?: Record<string, unknown>) {
  return post("/llm/swarm", { user_message: userMessage, user_wallet: userWallet, context });
}
