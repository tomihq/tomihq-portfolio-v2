import { Action, KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch } from "kbar"
import Results from "./Results"

import { useTheme } from "next-themes"
import { WithChildren } from "../../types"

type KBarProps = WithChildren

const KBar = (props: KBarProps) => {
	const { children } = props
	const {  setTheme } = useTheme()


	const actions: Action[] = [
		{
			id: "light-mode",
			name: "Tema Claro",
			keywords: "light mode",
			section: "Set Theme",
			perform: () => setTheme("light"),
			/* icon: <Sun />, */
		},
		{
			id: "dark-mode",
			name: "Tema Oscuro",
			keywords: "dark mode",
			section: "Set Theme",
			perform: () => setTheme("dark"),
			/* icon: <Moon />, */
		},
		{
			id: "github",
			name: "GitHub",
			keywords: "github",
			section: "Social",
			perform: () => window.open("https://github.com/tomihq", "_blank"),
			/* icon: <Github width="30" height="30" />, */
		},
		{
			id: "linkedin",
			name: "LinkedIn",
			keywords: "linkedin",
			section: "Social",
			perform: () =>
				window.open("https://www.linkedin.com/in/tomihq/", "_blank"),
			/* icon: <LinkedIn width="30" height="30" />, */
		},
		
	]

	return (
		<>
			<KBarProvider actions={actions} options={{disableScrollbarManagement: true}}>
				<KBarPortal>
					<KBarPositioner className="z-50 bg-[#0d1117]/10 backdrop-blur">
						<KBarAnimator className="w-full max-w-lg rounded border 
									dark:border-gray-800  bg-white dark:bg-black ">
							<KBarSearch className="w-full bg-transparent py-3 px-6 outline-none" />
							<Results />
							<div className="h-4"></div>
						</KBarAnimator>
					</KBarPositioner>
				</KBarPortal>
				{children}
			</KBarProvider>
		</>
	)
}

export default KBar