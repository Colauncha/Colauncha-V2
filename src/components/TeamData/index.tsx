import CustomCard from './CustomCard';

export interface TeamMemberProps {
  teamImg: string;
  name: string;
  className?: string; // Made optional with '?'
  position: string;
  description: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
  imageSize?: string; // Optional prop for image size
}

interface TeamProps {
  members?: TeamMemberProps[]; // Made optional with '?'
}

const defaultMembers: TeamMemberProps[] = [
  {
    teamImg: '/png/Akintola2.png',
    name: 'Akintola Oluwaseun',
    position: 'Product Manager',
    className: 'bg-[#093e9352]',
    description:
      'Ms. Akintola Oluwaseun is a seasoned project manager with a track record of delivering complex projects on time and within budget. His expertise in agile methodologies has been instrumental in driving team success.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/oluwaseunakintola',
      twitter: 'https://x.com/Theoseun'
    }
  },
  {
    teamImg: '/png/david2.png',
    name: 'David Adesope',
    position: 'Product Designer',
    className: 'bg-[#0b880b52]',
    description:
      'Ms. David Adesope is a creative product designer with a passion for crafting intuitive user interfaces. His designs have greatly improved the user experience of our products.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/david-adesope-237210223',
      twitter: 'https://x.com/'
    }
  },
  {
    teamImg: '/png/Iyanu2.png',
    name: 'Iyanu Ajimobi',
    position: 'Backend Developer/Technical Lead',
    className: 'bg-[#7c606c52]',
    description:
      'Ms. Iyanu Ajimobi is a skilled backend developer with a deep understanding of system architecture and cloud technologies. His leadership in technical projects has been pivotal in achieving our goals.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/i-yan-u',
      twitter: 'https://x.com/__yandev__'
    }
  },
  {
    teamImg: '/png/israel.png',
    name: 'Israel Evwerhamre',
    position: 'Backend Developer',
    className: 'bg-[#34516152]',
    description:
      'Ms Isreal Evwerhamre is a detail-oriented Back-end developer, proficient in Javasript, HTML, CSS, and Node.Js, with a passion for creating high performance web applications.',
    socialLinks: {
      linkedin: 'http://linkedin.com/in/israel-evwerhamre',
      twitter: 'https://x.com/ogkpos'
    },
    imageSize: '!object-cover'
  },
  {
    teamImg: '/png/uthman2.png',
    name: 'Adebari Uthman Titilope',
    position: 'Frontend Developer',
    className: 'bg-[#aca10552]',
    description:
      'Mr. Adebari Uthman Titilope is a proficient frontend developer with expertise in modern web technologies. His contributions have been crucial in building responsive and user-friendly applications.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/adebari-uthman-titilope-377961260',
      twitter: 'https://x.com/'
    },
  },
  {
    teamImg: '/png/ify2.png',
    name: 'Ifunanya Ugwoke',
    position: 'Frontend Developer',
    className: 'bg-[#331ea852]',
    description:
      'Miss. Ifunanya Ugwoke is a talented frontend developer known for her attention to detail and commitment to delivering high-quality code. Her work has significantly enhanced the performance of our web applications.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ifunanya-chidimma-2702911b1',
      twitter: 'https://x.com/Ifunayach35394'
    },
    imageSize: '!object-cover'
  },
  {
    teamImg: '/jpg/Bukky.jpeg',
    name: 'Ojo Bukola Damilola',
    position: 'Product Designer',
    className: 'bg-[#aa610752]',
    description:
      'Miss. Ojo Bukola Damilola is an innovative product designer with a passion for creating intuitive user interfaces. Her designs have greatly improved the user experience of our products.',
    socialLinks: {
      linkedin: '',
      twitter: ''
    },
    imageSize: '!!object-cover'
  },
  {
    teamImg: '/jpg/Paschal.jpeg',
    name: 'Chidubem Paschal Obiamalu',
    position: 'Graphic Designer',
    className: 'bg-[#0ce84352]',
    description:
      'Ms Chidubem Paschal Obiamalu is a creative graphic designer with a keen eye for detail. His designs have played a key role in enhancing our brand identity and marketing materials.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/paschal-obiamalu-2b4b621ba',
      twitter: 'https://x.com/ObiamaluPaschal'
    },
    imageSize: '!object-cover'
  },
  {
    teamImg: '/jpg/Muslim.jpeg',
    name: 'Mustapha Muslim',
    position: 'Graphic designer',
    className: 'bg-[#aed31a52]',
    description:
      'Ms. Mustapha Muslim is a talented graphic designer with a passion for creating visually appealing designs. His creativity has greatly enhanced our marketing materials.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muslimadetunjimustapha',
      twitter: ''
    },
    imageSize: '!!object-cover'
  },
  {
    teamImg: '/jpg/Abimbola.jpeg',
    name: 'Abimbola Ilusanmi Filan',
    position: 'Product Designer',
    className: 'bg-[#3a032852]',
    description:
      'Miss. Abimbola Ilusanmi Filan is a user-centered product designer passionate about solving real problems through thoughtful design. Her solutions have significantly improved customer satisfaction and product flow.',
    socialLinks: {
      linkedin: '',
      twitter: ''
    },
    imageSize: '!!object-cover'
  },
  {
    teamImg: '/jpg/Bukunmi.jpeg',
    name: 'Oluwabukunmi Adebamiji',
    position: 'Product Designer',
    className: 'bg-[#1a6b9752]',
    description:
      'Miss. Oluwabukunmi Adebamiji is a skilled product designer with a passion for creating intuitive user interfaces. Her work has significantly enhanced the user experience of our products.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/bukunmi-esther?',
      twitter: ''
    },
    imageSize: '!!object-cover'
  },
  {
    teamImg: '/jpg/Praise.jpeg',
    name: 'Azobu Praise',
    position: 'Product Designer',
    className: 'bg-[#aa610752]',
    description:
      'Miss. Azobu Praise is a strategic product designer who prioritizes clarity and user experience. Her designs consistently enhance usability while supporting business goals. .',
    socialLinks: {
      linkedin: '',
      twitter: ''
    },
    imageSize: '!!object-cover'
  },
  {
    teamImg: '/jpg/Aishat.jpeg',
    name: 'Aishat Adelakuna',
    position: 'Product Manager',
    className: 'bg-[#3e18d952]',
    description:
      'Mrs. Aishat Adelakuna is a skilled product manager with a passion for creating intuitive user interfaces. Her designs have greatly improved the user experience of our products.',
    socialLinks: {
      linkedin: '',
      twitter: ''
    },
    imageSize: '!object-cover'
  },
  {
    teamImg: '/jpg/Favour.jpeg',
    name: 'Favour Ezekiel',
    position: 'Graphic designer',
    className: 'bg-[#c61e9c52]',
    description:
      'Miss. Favour Ezekiel is a detail-oriented graphic designer skilled in creating impactful digital and print designs. Her visuals elevate brand identity and audience engagement.',
    socialLinks: {
      linkedin: '',
      twitter: ''
    },
    imageSize: '!!object-cover'
  },
  {
    teamImg: '/jpg/Ibiye.jpeg',
    name: ' Ibiye Wanaemi Horsfall',
    position: ' Graphic Designer',
    className: 'bg-[#f4580b52]',
    description:
      'Miss. Ibiye Wanaemi Horsfall is a results-focused graphic designer who blends creativity with strategy. Her visual solutions strengthen brand presence and communication.',
    socialLinks: {
      linkedin: '',
      twitter: ''
    },
    imageSize: '!object-cover'
  },
  {
    teamImg: '/jpg/Bolu.jpeg',
    name: 'Boluwatife Ajibola',
    position: 'Product Manager',
    className: 'bg-[#5174da52]',
    description:
      'Ms. Boluwatife Ajibola is a results-driven product manager with a strong focus on user experience and market impact. His product decisions consistently improve engagement and performance.',
    socialLinks: {
      linkedin: '',
      twitter: ''
    },
    imageSize: '!object-cover'
  },

  // {
  //   teamImg: '/png/isabella.png',
  //   name: 'Isabella Chiamaka',
  //   position: 'Business Analyst',
  //   className: 'bg-[#F6000052]',
  //   description:
  //     'Miss Isabella Ngonadi has an experience in administrative support, customer support, career strategy and digital marketing skill to help grow businesses. ',
  //   socialLinks: {
  //     linkedin: 'https://www.linkedin.com/in/isabellangonadi',
  //     twitter: 'https://x.com/spicyy_amaka1'
  //   }
  // },

  // {
  //   teamImg: '/png/eniola.png',
  //   name: 'Odusami Eniola',
  //   position: 'Social Media Strategist',
  //   className: 'bg-[#FF8C0052]',
  //   description:
  //     'Miss Odusanmi Eniola is a creative social media strategist, customer support and digital strategist, utilizing her talent and skills to help grow businesses.',
  //   socialLinks: {
  //     linkedin: 'https://www.linkedin.com/in/eniola-odusami-a439802b8',
  //     twitter: 'https://x.com/EnnyLois'
  //   },
  //   imageSize: '!object-cover'
  // },
];

const Team: React.FC<TeamProps> = ({ members = defaultMembers }) => {
  return (
    <div>
      <div className=" w-full md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center my-10">
        {members.map((member, index) => (
          <CustomCard
            key={index}
            teamImg={member.teamImg}
            name={member.name}
            position={member.position}
            className={member.className}
            description={member.description}
            socialLinks={member.socialLinks}
            imageSize={member.imageSize || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
