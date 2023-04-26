export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: string;
  footerOnly?: boolean;
};

export type SiteInfo = {
  name: string;
  title: string;
  description: string;
  logo: {
    src: string;
    alt: string;
  };
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
};

const siteInfo: SiteInfo = {
  name: "Cédric Bontems",
  title: "Conseiller Rivalis Gard / Vaucluse",
  description:
    "Elevate Your Page Building with OxyProps — the innovative WordPress plugin that integrates a sleek CSS framework, advanced custom elements, and smart context menus.",
  logo: {
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?&fit=crop&w=280",
    alt: "Portrait de Cédric Bontems",
  },
  image: {
    src: "/og/social.jpg",
    alt: "Portrait de Cédric Bontems",
  },
  socialLinks: [
    {
      platform: "youtube",
      href: "https://youtube.com/@oxyprops",
      me: "https://youtube.com/@oxyprops",
      text: "Follow o-props on YouTube",
      icon: "social/youtube",
    },
    {
      platform: "discord",
      href: "/chat",
      text: "Join the Astro community on Discord",
      icon: "social/discord",
    },
    {
      platform: "facebook",
      href: "https://twitter.com/astrodotbuild",
      me: "https://twitter.com/astrodotbuild",
      text: "Join the o-props community on Facebook",
      icon: "social/facebook",
    },
    {
      platform: "mastodon",
      href: "https://m.webtoo.ls/@astro",
      me: "https://m.webtoo.ls/@astro",
      text: "Follow Astro on Mastodon",
      footerOnly: true,
      icon: "social/mastodon",
    },
  ],
};

export default siteInfo;
