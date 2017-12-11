// Type definitions for discord-rpc-constructor 1.0.0
// Project: https://github.com/lloti/discord-rpc-constructor
// Defintions by: Dim <dimggyt@gmail.com> (https://github.com/lloti)
// License: MIT

declare module 'discord-rpc-constructor' {
	export default class Activity {
		public constructor(data?: Object);

		public details: string;
		public state: string;
		public startTimestamp: number;
		public endTimestamp: number;
		public largeImageKey: string;
		public smallImageKey: string;
		public largeImageText: string;
		public smallImageText: string;
		public partyId: string;
		public partySize: number;
		public partyMax: number;
		public matchSecret: string;
		public spectateSecret: string;
		public joinSecret: string;
		public instance: boolean;

		public setDetails(details: string): this;
		public setState(state: string): this;
		public setStartTimestamp(timestamp?: number | Date): this;
		public setEndTimestamp(timestamp?: number | Date): this;
		public setTimestamps(start: number | Date, end?: number | Date): this;
		public setLargeImage(key: string, text?: string): this;
		public setSmallImage(key: string, text?: string): this;
		public setParty(id: string, size?: number, max?: number): this;
		public setMatchSecret(secret: string): this;
		public setJoinSecret(secret: string): this;
		public setSpectateSecret(secret: string): this;
		public setInstance(instance: boolean): this;
	}
}