//@flow

declare type Response = {
  status: number,
  text(): string,
  json(): Object
}