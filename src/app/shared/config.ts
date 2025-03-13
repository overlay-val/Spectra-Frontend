export class Config {
  serverEndpoint = "http://84.247.187.226:5200";
  redirectUrl = "http://localhost:4000/overlay?groupCode=test123";
  sponsorImageUrls: string[] = [];
  sponsorImageRotateSpeed = 5000; // in milliseconds

  attackerColorPrimary = "#b82e3c";
  attackerColorSecondary = "#ff4557";
  attackerColorShieldCurrency = "#ff838f";

  defenderColorPrimary = "#25ac79";
  defenderColorSecondary = "#61eab6";
  defenderColorShieldCurrency = "#61eab6";

  public constructor(init?: Partial<Config>) {
    Object.assign(this, init);
  }
}
