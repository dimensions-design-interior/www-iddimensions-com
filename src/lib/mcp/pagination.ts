import { z } from "zod";

export const DEFAULT_LIMIT = 20;
export const MAX_LIMIT = 50;

export const paginationInputSchema = {
  limit: z
    .number()
    .int()
    .min(1)
    .max(MAX_LIMIT)
    .optional()
    .describe(`Maximum number of items to return (default ${DEFAULT_LIMIT}, max ${MAX_LIMIT}).`),
  offset: z
    .number()
    .int()
    .min(0)
    .optional()
    .describe("Number of items to skip before returning results (default 0)."),
};

export type PaginationInput = { limit?: number | undefined; offset?: number | undefined };

export type Page<T> = {
  items: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    returned: number;
    hasMore: boolean;
    nextOffset: number | null;
  };
};

export function paginate<T>(all: T[], { limit, offset }: PaginationInput = {}): Page<T> {
  const safeLimit = Math.min(Math.max(limit ?? DEFAULT_LIMIT, 1), MAX_LIMIT);
  const safeOffset = Math.max(offset ?? 0, 0);
  const items = all.slice(safeOffset, safeOffset + safeLimit);
  const end = safeOffset + items.length;
  const hasMore = end < all.length;
  return {
    items,
    pagination: {
      total: all.length,
      limit: safeLimit,
      offset: safeOffset,
      returned: items.length,
      hasMore,
      nextOffset: hasMore ? end : null,
    },
  };
}
