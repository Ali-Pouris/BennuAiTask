import type { MessageInstance } from "antd/es/message/interface";
import React from "react";

type MsgType = "success" | "error" | "info" | "warning" | "loading";

let _api: MessageInstance | null = null;
const _queue: Array<{
  type: MsgType;
  content: React.ReactNode;
  duration?: number;
}> = [];

export const setMessageApi = (api: MessageInstance | null) => {
  _api = api;
  if (_api) {
    while (_queue.length) {
      const m = _queue.shift()!;
      // @ts-ignore - MessageInstance methods exist
      _api[m.type](m.content, m.duration);
    }
  }
};

export const getMessageApi = (): MessageInstance | null => _api;

export const showMessage = (
  type: MsgType,
  content: React.ReactNode,
  duration?: number,
) => {
  if (_api && typeof (_api as any)[type] === "function") {
    // @ts-ignore
    _api[type](content, duration);
    return;
  }

  _queue.push({ type, content, duration });
};
