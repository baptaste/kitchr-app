export function renderIf(condition: any, render: any): void | null {
	if (condition) {
		return render();
	} else {
		return null;
	}
}
