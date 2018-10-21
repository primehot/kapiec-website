
export class UrlConfig {
  static serverHost = 'http://localhost';
  static serverPort = '8080';
  static serverUrl = `${UrlConfig.serverHost}:${UrlConfig.serverPort}`;

  static mainUrl = `${UrlConfig.serverUrl}/main`;
  static newsUrl = `${UrlConfig.serverUrl}/news`;
  static womenUrl = `${UrlConfig.serverUrl}/women`;
}
