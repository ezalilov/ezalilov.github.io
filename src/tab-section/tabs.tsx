import React, { useRef, useState } from 'react';
import s from './details.module.css'
import classNames from 'classnames';
export interface Tab {
	label: string
	content: string
	icon: string
}


export const Tabs = ({ tabsConfig, defaultIndex }: any) => {

	const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

	const handleClick = (index: number) => setSelectedIndex(index);

	// to store reference to the tab element
	const tabRefs = useRef<Record<number, HTMLButtonElement | null>>({});

	// Selected tab update helper
	const setIndex = (index: number) => {
		const tab = tabRefs.current[index];
		if (tab) {
			// focus() will call the state setter
			// to display the associated tabpanel
			tab.focus();
		}
	};

	// onKeyDown handler for tab elements
	const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		const count = tabsConfig.length;
		const nextTab = () => setIndex((selectedIndex + 1) % count);
		const prevTab = () => setIndex((selectedIndex - 1 + count) % count);
		const firstTab = () => setIndex(0);
		const lastTab = () => setIndex(count - 1);

		const keyMap: Record<string, () => void> = {
			ArrowRight: nextTab,
			ArrowLeft: prevTab,
			Home: firstTab,
			End: lastTab
		};

		const action = keyMap[event.key];

		if (action) {
			event.preventDefault();
			action();
		}
	};

	return (
		<div className={ s['tabs-container'] }>
			<div className={ s['tabs-list'] } role="tablist" aria-orientation="horizontal">
				{tabsConfig.map((tab: Tab, index: number) => (
					<button
						className={ classNames(s.tab, selectedIndex === index && s.active) }
						key={`tab-${index}`}
						onClick={() => handleClick(index)}
						role="tab"
						ref={(element) => (tabRefs.current[index] = element)}
						aria-controls={`panel-id-${index}`}
						aria-selected={selectedIndex === index}
						id={`tab-id-${index}`}
						onKeyDown={onKeyDown}
						onFocus={() => setSelectedIndex(index)}
						tabIndex={selectedIndex === index ? 0 : -1}
					>
						{tab.icon}
						{tab.label}
					</button>
				))}
			</div>
			<div className={ s['tabpanel-wrapper'] }>
				{tabsConfig.map((tab: Tab, index: number) => (
					<section
						key={`tabpanel-${index}`}
						hidden={selectedIndex !== index}
						role="tabpanel"
						aria-labelledby={`tab-id${index}`}
						id={`panel-id-${index}`}
						tabIndex={0}
					>
						{tab.content}
					</section>
				))}
			</div>
		</div>
	);
};