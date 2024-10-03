"use client";

import { atom } from 'recoil';

export const dataAtom = atom({
  key: 'dataAtom',  // Recoilの状態を一意に識別するためのキー
  default: null,    // 初期値をnullに設定
});