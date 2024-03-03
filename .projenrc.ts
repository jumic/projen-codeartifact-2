import { awscdk } from 'projen';
import { CodeArtifactAuthProvider } from 'projen/lib/release';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Julian Michel',
  authorAddress: 'mail@julianmichel.de',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: 'projen-codeartifact-2',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/jumic/projen-codeartifact-2.git',

  codeArtifactOptions: {
    roleToAssume: 'arn:aws:iam::857739166276:role/GitHubCodeArtifact',
    authProvider: CodeArtifactAuthProvider.GITHUB_OIDC,
  },

  releaseToNpm: true,
  npmRegistryUrl: 'https://jumic-sandbox-857739166276.d.codeartifact.eu-west-1.amazonaws.com/npm/my-repo/',
  npmProvenance: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();