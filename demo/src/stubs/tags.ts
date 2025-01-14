import type { Tag } from "../../../src/data/tag";
import type { MockHomeAssistant } from "../../../src/fake_data/provide_hass";

export const mockTags = (hass: MockHomeAssistant) => {
  hass.mockWS("tag/list", () => [{ id: "my-tag", name: "My Tag" }] as Tag[]);
};
