/** Shared constants for external links that may be used on multiple pages. */

export const bungieHelpLink = 'https://mastodon.social/@bungiehelp';
export const dimHelpMastodonLink = 'https://mstdn.games/@ThisIsDIM';
export const discordLink = 'https://discord.gg/UK2GWC7';
export const userGuideLink = 'https://github.com/DestinyItemManager/DIM/wiki';
export const wishListGuideLink =
  'https://github.com/DestinyItemManager/DIM/blob/master/docs/COMMUNITY_CURATIONS.md';

export const dimMastodonAccount = '@ThisIsDIM@mstdn.games';
export const bungieHelpAccount = '@BungieHelp';

export function userGuideUrl(topic: string) {
  return `${userGuideLink}/${topic}`;
}

export const troubleshootingLink = userGuideUrl('Troubleshooting');
