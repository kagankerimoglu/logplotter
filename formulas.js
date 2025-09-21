function linToAcescc(x) {
  const A = 9.72, B = 17.52;
  if (x <= 0) return -0.3584474886;
  if (x < Math.pow(2, -15)) return (Math.log2(Math.pow(2, -16) + x * 0.5) + A) / B;
  return (Math.log2(x) + A) / B;
}
function linToAcescct(x) {
  const X_BRK = 0.0078125, Y_BRK = 0.155251141552511;
  const A = 10.5402377416545, B = 0.0729055341958355;
  if (x <= X_BRK) return A * x + B;
  return (Math.log2(x) + 9.72) / 17.52;
}
function linToAppleLog(x) {
  const R0 = -0.05641088, Rt = 0.01;
  const c = 47.28711236, b = 0.00964052;
  const y = 0.08550479, d = 0.69336945;
  if (x >= Rt) return y * Math.log2(x + b) + d;
  if (x >= R0) return c * Math.pow(x - R0, 2);
  return 0;
}
function linToArrilogC3(x) {
  const cut = 0.010591;
  const a = 5.555556, b = 0.052272;
  const c = 0.247190, d = 0.385537;
  const e = 5.367655, f = 0.092809;
  if (x > cut) return c * Math.log10(a * x + b) + d;
  return e * x + f;
}
function linToArrilogC4(x) {
  const a = (Math.pow(2, 18) - 16) / 117.45;
  const b = (1023 - 95) / 1023;
  const c = 95 / 1023;
  const s = (7 * Math.log(2) * Math.pow(2, 7 - 14 * c / b)) / (a * b);
  const t = (Math.pow(2, 14 * (-c / b) + 6) - 64) / a;
  if (x < t) return (x - t) / s;
  return ((Math.log2(a * x + 64) - 6) / 14) * b + c;
}
function linToBMFilm5(x) {
  const A = 0.08692876065491224, B = 0.005494072432257808;
  const C = 0.5300133392291939, D = 8.283605932402494;
  const E = 0.09246575342465753, LIN_CUT = 0.005;
  if (x < LIN_CUT) return D * x + E;
  return A * Math.log(x + B) + C;
}
function linToCanonLog2(x) {
  const c0 = 0.092864125, c1 = 0.24136077, c2 = 87.099375;
  x /= 0.9;
  const safe1 = Math.max(1e-10, 1 - c2 * x);
  const safe2 = Math.max(1e-10, c2 * x + 1);
  if (x < 0) return -c1 * Math.log10(safe1) + c0;
  return c1 * Math.log10(safe2) + c0;
}
function linToCanonLog3(x) {
  const sp0 = 0.014, c0=0.36726845, c1=14.98325;
  const c2=0.12783901, c3=1.9754798, c4=0.12512219, c5=0.12240537;
  x /= 0.9;
  const safe1 = Math.max(1e-10, 1 - c1 * x);
  const safe2 = Math.max(1e-10, c1 * x + 1);
  if (x < -sp0) return -c0 * Math.log10(safe1) + c2;
  if (x <= sp0) return c3 * x + c4;
  return c0 * Math.log10(safe2) + c5;
}
function linToDaVinci(x) {
  const A=0.0075, B=7, C=0.07329248, M=10.44426855, CUT=0.00262409;
  if (x <= CUT) return x * M;
  return (Math.log2(x + A) + B) * C;
}
function linToDJI(x) {
  const a=6.025, b=0.0929, c=0.9892, d=0.0108, e=0.256663, f=0.584555;
  if (x <= 0.0078) return a * x + b;
  return Math.log10(x * c + d) * e + f;
}
function linToFilmLight(x) {
  const o=0.075, A=0.5520126568606655, B=0.09232902596577353;
  const C=0.0057048244042473785, G=16.184376489665897;
  if (x < 0) return G * x + o;
  return Math.log(x + C) * B + A;
}
function linToFujifilmFLog(x) {
  const a=0.555556, b=0.009468, c=0.344676, d=0.790453;
  const e=8.735631, f=0.092864, cut=0.00089;
  if (x < cut) return e * x + f;
  return c * Math.log10(a * x + b) + d;
}
function linToFujifilmFLog2(x) {
  const a=5.555556, b=0.064829, c=0.245281, d=0.384316;
  const e=8.799461, f=0.092864, cut=0.000889;
  if (x < cut) return e * x + f;
  return c * Math.log10(a * x + b) + d;
}
function linToKodak(x) {
  const a=685, b=300, c=95;
  const offset = Math.pow(10, (c - a) / b);
  return (a + b * Math.log10(x * (1 - offset) + offset)) / 1023;
}
function linToLeica(x) {
  const a=8, b=0.09, c=0.27, d=1.3, e=0.0115, f=0.6, cut=0.006;
  if (x <= cut) return a * x + b;
  return c * Math.log10(d * x + e) + f;
}
function linToNikon(x) {
  const a=619/1023, b=150/1023, c=650/1023, d=0.0075, c0=452/1023, c1=0.328;
  if (x > c1) return b * Math.log(x) + a;
  return c * Math.pow(x + d, 1/3);
}
function linToPanasonicVLog(x) {
  const cut=0.01, b=0.00873, c=0.241514, d=0.598206;
  if (x < cut) return 5.6 * x + 0.125;
  return c * Math.log10(x + b) + d;
}
function linToREDLog3G10(x) {
  const a=0.224282, b=155.975327, c=0.01, g=15.1927;
  x += c;
  if (x < 0) return x * g;
  return a * Math.log10(x * b + 1);
}
function linToSonySLog2(x) {
  const c0=0.432699, c1=155, c2=219, c3=0.037584, c4=0.616596, c5=0.03;
  const c6=3.53881278538813, c7=0.030001222851889303;
  x /= 0.9;
  let y = x < 0 ? x * c6 + c7 : c0 * Math.log10(c1 * x / c2 + c3) + c4 + c5;
  return y * (876/1023) + 64/1023;
}
function linToSonySLog3(x) {
  const c0=0.01125, c1=420, c2=0.01, c3=0.18, c4=261.5, c5=171.2102946929;
  const c6=0.01125, c7=95;
  if (x >= c0) return (c1 + Math.log10((x + c2) / (c3 + c2)) * c4) / 1023;
  return (x * (c5 - c7) / c6 + c7) / 1023;
}
function linToJPLog2(x) {
  const BRK=0.0068, SLOPE=10.367739, YINT=0.0907775;
  if (x <= BRK) return SLOPE * x + YINT;
  return (Math.log2(x) + 10.5) / 20.46;
}