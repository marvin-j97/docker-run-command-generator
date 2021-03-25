export interface IFlag {
  flag: [string, string];
}

export const flags: Record<string, IFlag> = {
  detach: {
    flag: ["-d", "--detach"],
  },
  interactive: {
    flag: ["-i", "--interactive"],
  },
  tty: {
    flag: ["-t", "--tty"],
  },
  name: {
    flag: ["--name", "--name"],
  },
  env: {
    flag: ["-e", "--env"],
  },
  rm: {
    flag: ["--rm", "--rm"],
  },
  attach: {
    flag: ["-a", "--attach"],
  },
  privileged: {
    flag: ["--privileged", "--privileged"],
  },
  restart: {
    flag: ["--restart", "--restart"],
  },
  pull: {
    flag: ["--pull", "--pull"],
  },
  workDir: {
    flag: ["-w", "--workdir"],
  },
  readOnly: {
    flag: ["--read-only", "--read-only"],
  },
  disableHealthcheck: {
    flag: ["--no-healthcheck", "--no-healthcheck"],
  },
  disableOOMKiller: {
    flag: ["--oom-kill-disable", "--oom-kill-disable"],
  },
  volume: {
    flag: ["-v", "--volume"],
  },
  port: {
    flag: ["-p", "--expose"],
  },
  mount: {
    flag: ["--mount", "--mount"],
  },
};
