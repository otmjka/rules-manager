
> ubo-filter-downloader@1.0.0 analyze
> npx tsx src/analyze.ts ./filters-305

Directory: /Users/rndmsd0/github/next-level-app/uBo-rules-manager/filters-305
Files (8):
  badware.min.txt, /Users/rndmsd0/github/next-level-app/uBo-rules-manager/filters-305/badware.min.txt
  easylist.txt, /Users/rndmsd0/github/next-level-app/uBo-rules-manager/filters-305/easylist.txt
  easyprivacy.txt, /Users/rndmsd0/github/next-level-app/uBo-rules-manager/filters-305/easyprivacy.txt
  filters.min.txt, /Users/rndmsd0/github/next-level-app/uBo-rules-manager/filters-305/filters.min.txt
  privacy.min.txt, /Users/rndmsd0/github/next-level-app/uBo-rules-manager/filters-305/privacy.min.txt
  quick-fixes.min.txt, /Users/rndmsd0/github/next-level-app/uBo-rules-manager/filters-305/quick-fixes.min.txt
  ubol-filters.txt, /Users/rndmsd0/github/next-level-app/uBo-rules-manager/filters-305/ubol-filters.txt
  unbreak.min.txt, /Users/rndmsd0/github/next-level-app/uBo-rules-manager/filters-305/unbreak.min.txt
0 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-xhr-response',
  args: [
    '/"adPlacements.*?([A-Z]"\\}|"\\}{2\\,4})\\}\\]\\,/',
    '',
    '/playlist\\?list=|\\/player(?:\\?.+)?$|watch\\?[tv]=/'
  ],
  filename: 'filters.min.txt'
}
1 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-xhr-response',
  args: [
    '/"adPlacements.*?("adSlots"|"adBreakHeartbeatParams")/gms',
    '$1',
    '/\\/player(?:\\?.+)?$/'
  ],
  filename: 'filters.min.txt'
}
2 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-fetch-response',
  args: [ `'"adPlacements"'`, `'"no_ads"'`, 'player?' ],
  filename: 'filters.min.txt'
}
3 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-fetch-response',
  args: [ `'"adSlots"'`, `'"no_ads"'`, 'player?' ],
  filename: 'filters.min.txt'
}
4 🐙
{
  domains: [
    'm.youtube.com',
    'music.youtube.com',
    'tv.youtube.com',
    'www.youtube.com',
    'youtubekids.com',
    'youtube-nocookie.com'
  ],
  name: 'set',
  args: [ 'ytInitialPlayerResponse.playerAds', 'undefined' ],
  filename: 'filters.min.txt'
}
5 🐙
{
  domains: [
    'm.youtube.com',
    'music.youtube.com',
    'tv.youtube.com',
    'www.youtube.com',
    'youtubekids.com',
    'youtube-nocookie.com'
  ],
  name: 'set',
  args: [ 'ytInitialPlayerResponse.adPlacements', 'undefined' ],
  filename: 'filters.min.txt'
}
6 🐙
{
  domains: [
    'm.youtube.com',
    'music.youtube.com',
    'tv.youtube.com',
    'www.youtube.com',
    'youtubekids.com',
    'youtube-nocookie.com'
  ],
  name: 'set',
  args: [ 'ytInitialPlayerResponse.adSlots', 'undefined' ],
  filename: 'filters.min.txt'
}
7 🐙
{
  domains: [
    'm.youtube.com',
    'music.youtube.com',
    'tv.youtube.com',
    'www.youtube.com',
    'youtubekids.com',
    'youtube-nocookie.com'
  ],
  name: 'set',
  args: [ 'playerResponse.adPlacements', 'undefined' ],
  filename: 'filters.min.txt'
}
8 🐙
{
  domains: [
    'm.youtube.com',
    'music.youtube.com',
    'youtubekids.com',
    'youtube-nocookie.com'
  ],
  name: 'json-prune',
  args: [
    'playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots important'
  ],
  filename: 'filters.min.txt'
}
9 🐙
{
  domains: [
    'm.youtube.com',
    'music.youtube.com',
    'tv.youtube.com',
    'www.youtube.com',
    'youtubekids.com',
    'youtube-nocookie.com'
  ],
  name: 'json-prune-fetch-response',
  args: [
    'reelWatchSequenceResponse.entries.[-].command.reelWatchEndpoint.adClientParams.isAd entries.[-].command.reelWatchEndpoint.adClientParams.isAd',
    '',
    'propsToMatch',
    'url:/reel_watch_sequence?'
  ],
  filename: 'filters.min.txt'
}
10 🐙
{
  domains: [
    'm.youtube.com',
    'music.youtube.com',
    'tv.youtube.com',
    'www.youtube.com',
    'youtubekids.com',
    'youtube-nocookie.com'
  ],
  name: 'json-prune',
  args: [ 'entries.[-].command.reelWatchEndpoint.adClientParams.isAd' ],
  filename: 'filters.min.txt'
}
11 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'no-xhr-if',
  args: [
    '/\\/api\\/stats\\/atr\\?.+?&rt=\\d+\\.\\d+.+?&volume=\\d+&cbr=.+?&fexp=v1%[-%0-9C]{300\\,}&.+?&muted=\\d(&vis=3)?&docid=/ method:POST'
  ],
  filename: 'privacy.min.txt'
}
12 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-rpnt',
  args: [
    'script',
    '(function serverContract()',
    '(()=>{if("YOUTUBE_PREMIUM_LOGO"===ytInitialData?.topbar?.desktopTopbarRenderer?.logo?.topbarLogoRenderer?.iconImage?.iconType||location.href.startsWith("https://www.youtube.com/tv#/")||location.href.startsWith("https://www.youtube.com/embed/"))return;const e=ytcfg.data_.INNERTUBE_CONTEXT.client.userAgent\\,t=t=>{ytcfg.data_.INNERTUBE_CONTEXT.client.userAgent=t?e.replace?.(/(Mozilla\\/5\\.0 \\([^)]+)/\\,"$1; "+t):e}\\,o=["channel"];let a=!1\\,r=o;document.addEventListener("DOMContentLoaded"\\,(function(){const e=()=>{const e=document.getElementById("movie_player");if(!e||!window.location.href.includes("/watch?"))return void(r=o);const n=e.getPlayerResponse?.()\\,s=e.getProgressState?.()\\,i=e.getStatsForNerds?.();if(s&&s.duration>0&&(s.loaded<s.duration||s.duration-s.current>1)||n?.videoDetails?.isLive){if(!i?.debug_info?.startsWith?.("SSAP\\',
    'AD")){const o=n.videoDetails?.videoId\\,s=n.playerConfig?.playbackStartConfig?.startSeconds??0\\,d=e.getPlayerStateObject?.()?.isBuffering;return void("UNPLAYABLE"!==n?.playabilityStatus?.status||n?.playabilityStatus?.errorScreen?.playerErrorMessageRenderer?.playerCaptchaViewModel||"WEB_PAGE_TYPE_UNKNOWN"!==n?.playabilityStatus?.errorScreen?.playerErrorMessageRenderer?.subreason?.runs?.[0]?.navigationEndpoint?.commandMetadata?.webCommandMetadata?.webPageType||"https://support.google.com/youtube/answer/3037019"!==n?.playabilityStatus?.errorScreen?.playerErrorMessageRenderer?.subreason?.runs?.[0]?.navigationEndpoint?.commandMetadata?.webCommandMetadata?.url?0===r.length?(a=!1\\,t("")):d&&"0.00 s"===i?.buffer_health_seconds&&"0x0"===i?.resolution&&a&&(t(r[0])\\,a=!1\\,e.loadVideoById(o\\,s)):(r=r.slice(1)\\,r.length>0?t(r[0]):t("")\\,a=!1\\,e.loadVideoById(o\\,s)))}s.duration>0&&e.seekTo?.(s.duration)}};e()\\,new MutationObserver((()=>{e()})).observe(document\\,{childList:!0\\,subtree:!0})}))\\,window.Map.prototype.has=new Proxy(window.Map.prototype.has\\,{apply:(e\\,t\\,o)=>{if("onSnackbarMessage"===o?.[0]&&!a){const e=document.getElementById("movie_player");if(!e)return;const t=e.getStatsForNerds?.()\\,o=e.getPlayerStateObject?.()?.isBuffering\\,n=e.getPlayerResponse?.()?.playbackTracking?.videostatsPlaybackUrl?.baseUrl;o&&"0.00 s"===t?.buffer_health_seconds&&"0x0"===t?.resolution&&r.length>0&&(n.includes("reloadxhr")&&(r=r.slice(1))\\,a=!0)}return Reflect.apply(e\\,t\\,o)}});const n={apply:(e\\,t\\,o)=>{const a=o[0];return"function"==typeof a&&a.toString().includes("onAbnormalityDetected")&&(o[0]=function(){})\\,Reflect.apply(e\\,t\\,o)}};window.Promise.prototype.then=new Proxy(window.Promise.prototype.then\\,n)})();(function serverContract()',
    'sedCount',
    '1'
  ],
  filename: 'quick-fixes.min.txt'
}
13 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-json-edit-xhr-request',
  args: [
    '[?..userAgent*="channel"]..client[?.clientName=="WEB"]+={"clientScreen":"CHANNEL"}',
    'propsToMatch',
    '/player?'
  ],
  filename: 'quick-fixes.min.txt'
}
14 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-json-edit-xhr-request',
  args: [
    '[?..userAgent=/adunit|channel|lactmilli|instream|eafg/]..referer=repl({"regex":"$"\\,"replacement":"#reloadxhr"})',
    'propsToMatch',
    '/player?'
  ],
  filename: 'quick-fixes.min.txt'
}
15 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'nano-stb',
  args: [ '[native code]', '17000', '0.001' ],
  filename: 'quick-fixes.min.txt'
}
16 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'json-prune-fetch-response',
  args: [
    'adPlacements adSlots playerResponse.adPlacements playerResponse.adSlots [].playerResponse.adPlacements [].playerResponse.adSlots',
    '',
    'propsToMatch',
    '/player?'
  ],
  filename: 'quick-fixes.min.txt'
}
17 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'json-prune-fetch-response',
  args: [
    'adPlacements adSlots playerResponse.adPlacements playerResponse.adSlots',
    '',
    'propsToMatch',
    '/playlist?'
  ],
  filename: 'quick-fixes.min.txt'
}
18 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'json-prune-xhr-response',
  args: [
    'adPlacements adSlots playerResponse.adPlacements playerResponse.adSlots [].playerResponse.adPlacements [].playerResponse.adSlots',
    '',
    'propsToMatch',
    '/\\/player(?:\\?.+)?$/'
  ],
  filename: 'quick-fixes.min.txt'
}
19 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-xhr-response',
  args: [
    '/"adPlacements.*?([A-Z]"\\}|"\\}{2\\,4})\\}\\]\\,/',
    '',
    '/playlist\\?list=|\\/player(?:\\?.+)?$|watch\\?[tv]=/'
  ],
  filename: 'quick-fixes.min.txt'
}
20 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-xhr-response',
  args: [
    '/"adPlacements.*?("adSlots"|"adBreakHeartbeatParams")/gms',
    '$1',
    '/\\/player(?:\\?.+)?$/'
  ],
  filename: 'quick-fixes.min.txt'
}
21 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-fetch-response',
  args: [ `'"adPlacements"'`, `'"no_ads"'`, 'player?' ],
  filename: 'quick-fixes.min.txt'
}
22 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-fetch-response',
  args: [ `'"adSlots"'`, `'"no_ads"'`, 'player?' ],
  filename: 'quick-fixes.min.txt'
}
23 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-fetch-response',
  args: [ `'"adSlots"'`, `'"no_ads"'`, '/^\\W+$/' ],
  filename: 'quick-fixes.min.txt'
}
24 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'rmnt',
  args: [ 'script', 'window\\,"fetch"' ],
  filename: 'quick-fixes.min.txt'
}
25 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-prevent-dom-bypass',
  args: [ 'Node.prototype.appendChild', 'fetch' ],
  filename: 'quick-fixes.min.txt'
}
26 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-prevent-dom-bypass',
  args: [ 'Node.prototype.appendChild', 'Request' ],
  filename: 'quick-fixes.min.txt'
}
27 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-prevent-dom-bypass',
  args: [ 'Node.prototype.appendChild', 'JSON.parse' ],
  filename: 'quick-fixes.min.txt'
}
28 🐙
{
  domains: [ 'www.youtube.com' ],
  name: 'trusted-replace-fetch-response',
  args: [ `'"adSlots"'`, `'"no_ads"'`, '/get_watch?' ],
  filename: 'quick-fixes.min.txt'
}
