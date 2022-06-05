export function logInfo(...args: any): void {
  console.log('[LOG]', ...args);
}

export function logError(...args: any): void {
  console.error('[ERROR]', ...args);
}