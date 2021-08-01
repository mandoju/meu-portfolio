import {PROFILE_LINKEDIN, PROFILE_GITHUB} from "../constants/config";

const ProfileSocialLink = ({iconName, href}: {iconName: string, href: string}) => (
    <div className="mr-4 p-3 text-center">
        <a href={href} target={"_blank"}>
            <i className={`fab ${iconName} mr-2 fa-3x text-gray-500`} />
        </a>
    </div>
)

export const ProfileSocialLinks = () => {
    return (<div className="w-full lg:w-4/12 px-4 lg:order-1">
        <div className="flex justify-center py-4 lg:pt-4 pt-8">
            <ProfileSocialLink iconName={'fa-linkedin'} href={PROFILE_LINKEDIN} />
            <ProfileSocialLink iconName={'fa-github'} href={PROFILE_GITHUB} />
        </div>
    </div>)
}

export default ProfileSocialLinks