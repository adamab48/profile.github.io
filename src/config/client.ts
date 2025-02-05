import { PLAUSIBLE_DOMAIN, PLAUSIBLE_SCRIPT_URL, SITE_URL } from 'astro:env/client';

import { configClientSchema } from '@/schemas/config';
import { validateData } from '@/utils/validation';

import type { ConfigClientType } from '@/types/config';

const configClientData: ConfigClientType = {
  /** all urls without '/' */
  SITE_URL,
  SITE_TITLE: "Adam's Blog",
  SITE_DESCRIPTION: 'I am Adam a guy who like to automate things and write about it.',
  PLAUSIBLE_SCRIPT_URL,
  PLAUSIBLE_DOMAIN,
  PAGE_SIZE_POST_CARD: 3,
  PAGE_SIZE_POST_CARD_SMALL: 6,
  MORE_POSTS_COUNT: 3,
  DEFAULT_MODE: 'light',
  DEFAULT_THEME: 'default-light',
  AUTHOR_NAME: 'Adam Abichou',
  AUTHOR_EMAIL: 'adam@abichou.tn',
  AUTHOR_GITHUB: 'https://github.com/adamab48',
  AUTHOR_LINKEDIN: 'https://www.linkedin.com/in/adam-abichou/',
  AUTHOR_TWITTER: 'https://x.com/Fight4everZZ',
  AUTHOR_YOUTUBE: 'https://www.youtube.com/@nemanja_codes',
  REPO_URL: 'https://github.com/nemanjam/nemanjam.github.io',
};

export const CONFIG_CLIENT = validateData(configClientData, configClientSchema);
