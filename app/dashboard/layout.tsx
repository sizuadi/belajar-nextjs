import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<p>Ini adalah layout untuk dashboard</p>
			{children}
		</div>
	);
}
