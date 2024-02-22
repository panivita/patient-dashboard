type TwoColumnSectionProps = {
	description: {
		id: string;
		text: string;
	}[];
	title: string;
	big_text: string;
	image_src: string;
};

export const TwoColumnSection = ({ title, image_src, description, big_text }: TwoColumnSectionProps) => {
	return (
		<section className="py-6">
			<span>{title}</span>
			<div className="grid grid-cols-4 gap-sm mx-0 md:grid-cols-12 md:gap-lg">
				<img
					className="col-span-full md:col-start-1 md:col-end-6"
					width="300"
					src={image_src}
					alt={image_src} />
				<div className="col-span-full md:col-start-7 md:col-end-13">
					<big>{big_text}</big>
					{description.map(({ text, id }) => (
						<div key={id}>{text}</div>
					))}
				</div>
			</div>
		</section>
	);
};
