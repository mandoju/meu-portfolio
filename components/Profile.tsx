import ProfileSocialLinks from './ProfileSocialLinks';
import {
	PROFILE_DESCRIPTION,
	PROFILE_FORMATION,
	PROFILE_FORMATION_LOCATION,
	PROFILE_JOB,
	PROFILE_LOCAL,
	PROFILE_NAME,
} from '../constants/config';
import ProfileTechnologies from './ProfileTechnologies';
import Image from 'next/image';
import avatarImage from '../public/img/avatar.jpeg';

const Profile = () => {
	return (
		<section className="relative py-16 bg-gray-300">
			<div className="container mx-auto px-4">
				<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
					<div className="px-6">
						<div className="flex flex-wrap justify-center">
							<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
								<div className="relative">
									<Image
										alt="Profile picture"
										src={avatarImage}
										className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 profile-image"
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
								<div className="py-6 px-3 mt-32 sm:mt-0"></div>
							</div>
							<ProfileSocialLinks />
						</div>
						<div className="text-center mt-12">
							<h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
								{PROFILE_NAME}
							</h3>
							<div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
								<i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500" />
								{PROFILE_LOCAL}
							</div>
							<div className="mb-2 text-gray-700 mt-10">
								<i className="fas fa-briefcase mr-2 text-lg text-gray-500" />
								{PROFILE_JOB}
							</div>
							<div className="mb-2 text-gray-700">
								<i className="fas fa-graduation-cap mr-2 text-lg text-gray-500" />
								{PROFILE_FORMATION}
							</div>
							<div className="mb-2 text-gray-700">
								<i className="fas fa-university mr-2 text-lg text-gray-500" />
								{PROFILE_FORMATION_LOCATION}
							</div>
						</div>
						<div className="mt-10 py-10 border-t border-gray-300 text-center">
							<div className="flex flex-wrap justify-center">
								<div className="w-full lg:w-9/12 px-4">
									<p className="mb-4 text-lg leading-relaxed text-gray-800">
										{PROFILE_DESCRIPTION}
									</p>
								</div>
							</div>
						</div>
					</div>
					<ProfileTechnologies />
				</div>
			</div>
		</section>
	);
};

export default Profile;
