import "server-only";

import { hash, verify, type Options } from "@node-rs/argon2";

const passwordHashOptions = {
  // Argon2id. The package exposes this value through an ambient const enum.
  algorithm: 2,
  memoryCost: 19_456,
  timeCost: 2,
  parallelism: 1,
  outputLen: 32,
} satisfies Options;

export function hashPassword(password: string) {
  return hash(password, passwordHashOptions);
}

export async function verifyPassword(passwordHash: string, password: string) {
  try {
    return await verify(passwordHash, password);
  } catch {
    return false;
  }
}
