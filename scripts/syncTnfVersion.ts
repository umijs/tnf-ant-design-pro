import 'zx/globals';

(async () => {
  const json = JSON.parse((await $`npm info @umijs/tnf --json`).stdout.trim());
  const version = json['dist-tags']['latest'];
  const pkgPath = path.join(__dirname, '../package.json');
  const content = fs.readFileSync(pkgPath, 'utf-8');
  const pkg = JSON.parse(content);
  pkg.dependencies['@umijs/tnf'] = `^${version}`;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`✅Sync tnf version to ${version}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
