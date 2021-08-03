import Image from 'next/image';

const ProfileTechnologyCard = ({
	classColor,
	imgUrl,
	title,
	description,
}: {
	classColor: string;
	imgUrl: string;
	title: string;
	description: string;
}) => (
	<div className={`${classColor} shadow-lg rounded-lg text-center p-8`}>
		<Image
			alt="..."
			className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
			src={imgUrl}
			width={100}
			height={100}
		/>
		<p className="text-lg text-white mt-4 font-semibold">{title}</p>
		<p className="text-base text-white opacity-75 mt-2">{description}</p>
	</div>
);

export const ProfileTechnologies = () => (
	<section className="relative">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap items-center">
				<div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
					<div className="justify-center flex flex-wrap relative">
						<div className="my-4 w-full lg:w-6/12 px-4">
							<ProfileTechnologyCard
								classColor={'bg-blue-500'}
								imgUrl={'/img/react.jpg'}
								title={'ReactJs'}
								description={
									'Biblioteca para frontend criada pelo Facebook e mantida pelos usuários.'
								}
							/>
							<ProfileTechnologyCard
								classColor={'bg-green-500 mt-8'}
								imgUrl={'/img/nodejs-logo.png'}
								title={'Node'}
								description={
									'Com Node e Express, é possível desenvolver soluções para backend.'
								}
							/>
						</div>
						<div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
							<ProfileTechnologyCard
								classColor={'bg-black'}
								imgUrl={'/img/react-native-logo.png'}
								title={'React-Native'}
								description={
									'Framework utilizado para desenvolver aplicativos mobile Android e Ios'
								}
							/>
							<ProfileTechnologyCard
								classColor={'bg-yellow-500 mt-8'}
								imgUrl={'/img/aws.png'}
								title={'AWS'}
								description={
									'a JavaScript-based open-source front-end web framework mainly maintained by Google.'
								}
							/>
						</div>
					</div>
				</div>
				<div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto">
					<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
						<i className="fas fa-drafting-compass text-xl" />
					</div>
					<h3 className="text-3xl mb-2 font-semibold leading-normal">
						FullStack na Essência
					</h3>
					<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
						Com uma alta experiência em várias tecnologias, sou
						capaz de trabalhar em todas as áreas para sistemas web e
						mobile.
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default ProfileTechnologies;
