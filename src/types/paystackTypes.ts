export interface Setting {
  label: string;
  type: string;
  required: boolean;
  default?: string;
}

export interface Payload {
  channel_id: string;
  return_url: string;
  settings: Setting[];
}
