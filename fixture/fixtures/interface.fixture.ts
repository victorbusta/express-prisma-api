export interface Fixture {
  table: string,
  entries: Entrie[],
}

interface Entrie {
  parameters: Parameter[],
}

interface Parameter {
  name: string,
  value: string,
}