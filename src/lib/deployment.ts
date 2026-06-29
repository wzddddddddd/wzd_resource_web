export function getGitHubPagesBasePath(repository: string | undefined, isGitHubActions: boolean) {
  if (!repository || !isGitHubActions) {
    return "";
  }

  const [, repoName] = repository.split("/");

  if (!repoName || repoName.endsWith(".github.io")) {
    return "";
  }

  return `/${repoName}`;
}
