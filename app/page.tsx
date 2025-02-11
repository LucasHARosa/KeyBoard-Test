"use client"
import { CompactKeyboard } from "@/components/compactKeyboard";
import { KeyButton } from "@/components/keyButton";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCcw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const soundAssets: Record<string, string> = {
  sound1: "/typing-sound-01-229863.mp3",
  sound2: "/075176_duck-quack-40345.mp3",
};

const KeyboardTest = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [clickedKeys, setClickedKeys] = useState<Set<string>>(new Set());
  const [sound, setSound] = useState("sound1");
  const [keyHistory, setKeyHistory] = useState<string[]>([]);
  const [lastPressedKey, setLastPressedKey] = useState<string | null>(null);

  const playSound = useCallback(() => {
    if (sound !== "off") {
      const audioUrl = soundAssets[sound];
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play();
      }
    }
  }, [sound]);

  const formatKeyLabel = (code: string) => {
    if (code.startsWith("Key")) return code.slice(3);
    if (code.startsWith("Digit")) return code.slice(5);
    if (code === "Escape") return "Esc";
    if (code === "Backspace") return "Bksp";
    return code;
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    setPressedKeys((prev) => new Set([...prev, e.code]));
    setClickedKeys((prev) => new Set([...prev, e.code]));
    setLastPressedKey(e.code);
    setKeyHistory((prev) => [...prev, e.code]);
    playSound();
  }, [playSound]);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    setPressedKeys((prev) => {
      const newSet = new Set(prev);
      newSet.delete(e.code);
      return newSet;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  const resetHistory = () => {
    setPressedKeys(new Set());
    setKeyHistory([]);
    setLastPressedKey(null);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">
          Teste de Teclado 65% - EN
        </h1>

        <div className="flex items-center gap-4 mb-8 justify-center">
          <Button variant="outline" size="icon" onClick={resetHistory}>
            <RefreshCcw className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-4">

            <Select value={sound} onValueChange={setSound} >
              <SelectTrigger className="w-[180px] rounded bg-gray-50">
                <SelectValue placeholder="Som" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="off">Som: Desativado</SelectItem>
                <SelectItem value="sound1">Som: Tecla</SelectItem>
                <SelectItem value="sound2">Som: Quack</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Histórico de teclas exibido horizontalmente acima do teclado */}
        <div className="flex gap-4 mb-4 w-full">
          {/* Caixa da última tecla pressionada */}
          <div className=" px-3 bg-gray-50 border rounded-lg w-50 h-16 flex items-center justify-center">
            <div className="text-sm text-gray-500">Última tecla pressionada:</div>
            <KeyButton className="w-20" code={formatKeyLabel(lastPressedKey || "-")} label={formatKeyLabel(lastPressedKey || "-")} isPressed={false} />
          </div>

          {/* Caixa fixa para o histórico */}
          <div className="bg-gray-50 border rounded-lg w-full h-16 overflow-x-hidden flex items-center px-2 ">
            <div className="flex gap-2">
              {keyHistory.slice().reverse().map((code, index) => (
                <div
                  key={index}
                  className="px-3.5 py-2 border rounded text-sm font-medium bg-gray-200"
                >
                  {formatKeyLabel(code)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <CompactKeyboard pressedKeys={pressedKeys} isClicked={clickedKeys} />

        <div className="mt-4 text-center text-sm text-gray-500">
          Pressione qualquer tecla para testar
        </div>
      </div>
    </div>
  );
};

export default KeyboardTest;