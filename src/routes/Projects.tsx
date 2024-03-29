import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Project from "../components/Project";

export default function Projects() {
	useEffect(() => {
		document.title = "Projects";
	}, []);

	const sliderLength = 7;
	const [activeIndex, setActiveIndex] = useState(3);

	//? nextBtn handling
	const nextBtn = () => {
		const nextIndex =
			activeIndex + 1 <= sliderLength ? activeIndex + 1 : activeIndex;
		const prevIndex =
			activeIndex - 1 >= 0 && activeIndex - 1 < sliderLength - 1
				? activeIndex - 1
				: -1;
		console.log(prevIndex);

		try {
			const prevGroup = document.querySelector(`[data-index="${prevIndex}"]`);
			//@ts-ignore
			prevGroup.dataset.status = "outside-left";
		} catch (e) {
			console.log(e);
		}

		const currentGroup = document.querySelector(
			`[data-index="${activeIndex}"]`
		);
		const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

		//@ts-ignore
		currentGroup.dataset.status = "before";
		//@ts-ignore
		nextGroup.dataset.status = "active";

		try {
			const nexxtGroup = document.querySelector(
				`[data-index="${nextIndex + 1}"]`
			);
			//@ts-ignore
			nexxtGroup.dataset.status = "after";
		} catch (e) {
			console.log(e);
		}

		setActiveIndex(nextIndex);
	};

	//? prevBtn handling
	const prevBtn = () => {
		const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0;
		const nextIndex =
			activeIndex + 1 <= sliderLength && activeIndex + 1 > 1
				? activeIndex + 1
				: -1;

		try {
			const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
			//@ts-ignore
			nextGroup.dataset.status = "outside-right";
		} catch (e) {
			console.log(e);
		}

		const currentGroup = document.querySelector(
			`[data-index="${activeIndex}"]`
		);
		const prevGroup = document.querySelector(`[data-index="${prevIndex}"]`);

		//@ts-ignore
		currentGroup.dataset.status = "after";
		//@ts-ignore
		prevGroup.dataset.status = "active";

		try {
			const prevvGroup = document.querySelector(
				`[data-index="${prevIndex - 1}"]`
			);
			//@ts-ignore
			prevvGroup.dataset.status = "before";
		} catch (e) {
			console.log(e);
		}

		setActiveIndex(prevIndex);
	};

	return (
		<motion.div
			className="projects"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
		>
			<div className="slider">
				<Project
					index="0"
					to="https://alierenkilinc.github.io"
					status="outside-left"
					name="AEK Personal Website"
					img="/img/aek.webp"
					tech={["JavaScript", "SCSS", "EmailJS"]}
					desc="
          A personal website made with vanilla HTML and JavaScript for Ali
          Eren Kilinc to show his portfolio to other people. (Waiting for texts to be sent)"
				/>
				<Project
					index="1"
					to="https://docs.google.com/presentation/u/1/d/1WdBIRq7PaabWWXLWedBkUCKILvpiZ0CI/edit?usp=sharing&ouid=103587808423500113376&rtpof=true&sd=true"
					status="outside-left"
					name="DrDir10"
					img="/img/drdir10.webp"
					tech={["Fusion360", "Unity"]}
					desc="
          We participated and designed a concept flying car in Teknofest
          2020 Flying Car Design Competition Free Category and became
          winners of our category."
				/>
				<Project
					index="2"
					to="https://collabcorner.hkayrad.me"
					status="before"
					name="Collab Corner"
					img="/img/cc.webp"
					tech={["React", "ReactThreeFiber", "Framer Motion"]}
					desc="You can follow progress on our collab projects that me and my friend do in our free time."
				/>
				<Project
					index="3"
					to="https://bohredom.hkayrad.me"
					status="active"
					name="Bohredom"
					img="/img/bohredom.webp"
					tech={["React", "TypeScript", "ReactPhotoSphereViewer", "Firebase"]}
					desc='
          We, as Bohredom, managed to develop a website platform in order to
          serve to science enthusiasts as a source. If you ask us "How are
          you achieving this?" Bohredom website visualizing the space
          environment and make you feel as you are visiting the place while
          you are learning about it.'
				/>
				<Project
					index="4"
					to="https://homer-git-dev-hkayrad.vercel.app/"
					status="after"
					name="Homer"
					img="/img/homer.webp"
					tech={["React", "TypeScript", "Next", "Firebase", "Vercel"]}
					desc="
          Homer was intended to be a showcase site to show my ability to connect databases to front end applications. But after learning NextJS is compiled static website generator, I started to rebuild the project using Express and React"
				/>
				<Project
					index="5"
					to="https://desktop.hkayrad.me"
					status="outside-right"
					name="Desktop Experience"
					img="/img/de.webp"
					tech={["JavaScript", "SCSS", "EMailJS"]}
					desc="
          I wanted to challenge myself to learn Vanilla JavaScript to improve. So I created a desktop environment experience on web. I merged Ubuntu and Windows look to create a unique design."
				/>
				<Project
					index="6"
					to="https://sehiredebiyati.wixsite.com/sehiredebiyati"
					status="outside-right"
					name="Sehir Edebiyati"
					img="/img/sehiredebiyati.webp"
					tech={["React", "TypeScript", "Google Street View"]}
					desc="
          With some literature enthusiast friends, we managed to find
          architectural connections to literature and made Sehir Edebiyati
          website to show it to other people who find it interesting."
				/>
				<Project
					index="7"
					to="https://github.com/hkayrad/intercastedArchive"
					status="outside-right"
					name="Intercasted"
					img="/img/interDark.webp"
					tech={["PHP", "mySQL", "phpMyAdmin", "JavaScript", "Firebase"]}
					desc="
          Intercasted was a platform that you can live stream prepared
          videos with a growing audience and interact with them."
				/>
			</div>
			<div className="buttons">
				<button className="prev" onClick={prevBtn}>
					Previous Project
				</button>
				<button className="next" onClick={nextBtn}>
					Next Project
				</button>
			</div>

			<div className="mobileProjects">
				<Project
					index="2"
					to="https://bohredom.hkayrad.me"
					status="active"
					name="Bohredom"
					img="/img/bohredom.webp"
					tech={["React", "TypeScript", "Firebase", "ReactPhotoSphereViewer"]}
					desc='
          We, as Bohredom, managed to develop a website platform in order to
          serve to science enthusiasts as a source. If you ask us "How are
          you achieving this?" Bohredom website visualizing the space
          environment and make you feel as you are visiting the place while
          you are learning about it.'
				/>
				<Project
					index="4"
					to="https://homer-git-dev-hkayrad.vercel.app/"
					status="after"
					name="Homer"
					img="/img/homer.webp"
					tech={["React", "TypeScript", "Next", "Firebase", "Vercel"]}
					desc="
          Homer is a mini project I've done in the summer break. It is a showcase site to show my ability to connect databases to front end applications. The database is not connected thanks to Firestore not behaving correctly. I'll try to fix it soon."
				/>
				<Project
					index="3"
					to="https://desktop.hkayrad.me"
					status="after"
					name="Desktop Experience"
					img="/img/de.webp"
					tech={["JavaScript", "SCSS", "EMailJS"]}
					desc="
          I wanted to challenge myself to learn Vanilla JavaScript to improve. So I created a desktop environment experience on web. I merged Ubuntu and Windows look to create a unique design."
				/>
				<Project
					index="4"
					to="https://sehiredebiyati.wixsite.com/sehiredebiyati"
					status="outside-right"
					name="Sehir Edebiyati"
					img="/img/sehiredebiyati.webp"
					tech={["React", "TypeScript", "Google Street View"]}
					desc="
          With some literature enthusiast friends, we managed to find
          architectural connections to literature and made Sehir Edebiyati
          website to show it to other people who find it interesting."
				/>
				<Project
					index="2"
					to="https://collabcorner.hkayrad.me"
					status="before"
					name="Collab Corner"
					img="/img/cc.webp"
					tech={["React", "ReactThreeFiber", "Framer Motion"]}
					desc="You can follow progress on our collab projects that me and my friend do in our free time."
				/>
				<Project
					index="0"
					to="https://alierenkilinc.github.io"
					status="outside-left"
					name="AEK Personal Website"
					img="/img/aek.webp"
					tech={["JavaScript", "SCSS", "EmailJS"]}
					desc="
          A personal website made with vanilla HTML and JavaScript for Ali
          Eren Kilinc to show his portfolio to other people. (Waiting for texts to be sent)"
				/>
				<Project
					index="1"
					to="https://docs.google.com/presentation/u/1/d/1WdBIRq7PaabWWXLWedBkUCKILvpiZ0CI/edit?usp=sharing&ouid=103587808423500113376&rtpof=true&sd=true"
					status="before"
					name="DrDir10"
					img="/img/drdir10.webp"
					tech={["Fusion360", "Unity"]}
					desc="
          We participated and designed a concept flying car in Teknofest
          2020 Flying Car Design Competition Free Category and became
          winners of our category."
				/>
				<Project
					index="5"
					to="https://github.com/hkayrad/intercastedArchive"
					status="outside-right"
					name="Intercasted"
					img="/img/interDark.webp"
					tech={["PHP", "mySQL", "phpMyAdmin", "JavaScript", "Firebase"]}
					desc="
          Intercasted was a platform that you can live stream prepared
          videos with a growing audience and interact with them."
				/>
			</div>
		</motion.div>
	);
}
