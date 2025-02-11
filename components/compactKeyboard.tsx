import { KeyButton } from "./keyButton";

interface KeyboardProps {
  pressedKeys: Set<string>;
  isClicked: Set<string>;
}

export const CompactKeyboard = ({ pressedKeys, isClicked }: KeyboardProps) => (
  <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
    <div className="space-y-1 flex flex-col gap-1 align-center justify-center">
      {/* Linha 1: 14 teclas */}
      <div className="flex gap-1 grid grid-cols-keyboard-compact">
        <KeyButton code="Escape" label="Esc" isClicked={isClicked.has("Escape")} isPressed={pressedKeys.has("Escape")} />
        <KeyButton code="Digit1" label="1" isClicked={isClicked.has("Digit1")} isPressed={pressedKeys.has("Digit1")} />
        <KeyButton code="Digit2" label="2" isClicked={isClicked.has("Digit2")} isPressed={pressedKeys.has("Digit2")} />
        <KeyButton code="Digit3" label="3" isClicked={isClicked.has("Digit3")} isPressed={pressedKeys.has("Digit3")} />
        <KeyButton code="Digit4" label="4" isClicked={isClicked.has("Digit4")} isPressed={pressedKeys.has("Digit4")} />
        <KeyButton code="Digit5" label="5" isClicked={isClicked.has("Digit5")} isPressed={pressedKeys.has("Digit5")} />
        <KeyButton code="Digit6" label="6" isClicked={isClicked.has("Digit6")} isPressed={pressedKeys.has("Digit6")} />
        <KeyButton code="Digit7" label="7" isClicked={isClicked.has("Digit7")} isPressed={pressedKeys.has("Digit7")} />
        <KeyButton code="Digit8" label="8" isClicked={isClicked.has("Digit8")} isPressed={pressedKeys.has("Digit8")} />
        <KeyButton code="Digit9" label="9" isClicked={isClicked.has("Digit9")} isPressed={pressedKeys.has("Digit9")} />
        <KeyButton code="Digit0" label="0" isClicked={isClicked.has("Digit0")} isPressed={pressedKeys.has("Digit0")} />
        <KeyButton code="Minus" label="-" isClicked={isClicked.has("Minus")} isPressed={pressedKeys.has("Minus")} />
        <KeyButton code="Equal" label="=" isClicked={isClicked.has("Equal")} isPressed={pressedKeys.has("Equal")} />
        <KeyButton code="Backspace" label="⌫" isClicked={isClicked.has("Backspace")} isPressed={pressedKeys.has("Backspace")} className="col-span-2" />
      </div>
      {/* Linha 2: 15 teclas */}
      <div className="flex gap-1 grid grid-cols-keyboard-compact">
        <KeyButton code="Tab" label="Tab" isClicked={isClicked.has("Tab")} isPressed={pressedKeys.has("Tab")} className="col-span-2" />
        <KeyButton code="KeyQ" label="Q" isClicked={isClicked.has("KeyQ")} isPressed={pressedKeys.has("KeyQ")} />
        <KeyButton code="KeyW" label="W" isClicked={isClicked.has("KeyW")} isPressed={pressedKeys.has("KeyW")} />
        <KeyButton code="KeyE" label="E" isClicked={isClicked.has("KeyE")} isPressed={pressedKeys.has("KeyE")} />
        <KeyButton code="KeyR" label="R" isClicked={isClicked.has("KeyR")} isPressed={pressedKeys.has("KeyR")} />
        <KeyButton code="KeyT" label="T" isClicked={isClicked.has("KeyT")} isPressed={pressedKeys.has("KeyT")} />
        <KeyButton code="KeyY" label="Y" isClicked={isClicked.has("KeyY")} isPressed={pressedKeys.has("KeyY")} />
        <KeyButton code="KeyU" label="U" isClicked={isClicked.has("KeyU")} isPressed={pressedKeys.has("KeyU")} />
        <KeyButton code="KeyI" label="I" isClicked={isClicked.has("KeyI")} isPressed={pressedKeys.has("KeyI")} />
        <KeyButton code="KeyO" label="O" isClicked={isClicked.has("KeyO")} isPressed={pressedKeys.has("KeyO")} />
        <KeyButton code="KeyP" label="P" isClicked={isClicked.has("KeyP")} isPressed={pressedKeys.has("KeyP")} />
        <KeyButton code="BracketLeft" label="[" isClicked={isClicked.has("BracketLeft")} isPressed={pressedKeys.has("BracketLeft")} />
        <KeyButton code="BracketRight" label="]" isClicked={isClicked.has("BracketRight")} isPressed={pressedKeys.has("BracketRight")} />
        <KeyButton code="Backslash" label="\ |" isClicked={isClicked.has("Backslash")} isPressed={pressedKeys.has("Backslash")} />
        <KeyButton code="Delete" label="Del" isClicked={isClicked.has("Delete")} isPressed={pressedKeys.has("Delete")} />
      </div>
      {/* Linha 3: 13 teclas */}
      <div className="flex gap-1 grid grid-cols-keyboard-compact">
        <KeyButton code="CapsLock" label="Caps" isClicked={isClicked.has("CapsLock")} isPressed={pressedKeys.has("CapsLock")} className="col-span-2" />
        <KeyButton code="KeyA" label="A" isClicked={isClicked.has("KeyA")} isPressed={pressedKeys.has("KeyA")} />
        <KeyButton code="KeyS" label="S" isClicked={isClicked.has("KeyS")} isPressed={pressedKeys.has("KeyS")} />
        <KeyButton code="KeyD" label="D" isClicked={isClicked.has("KeyD")} isPressed={pressedKeys.has("KeyD")} />
        <KeyButton code="KeyF" label="F" isClicked={isClicked.has("KeyF")} isPressed={pressedKeys.has("KeyF")} />
        <KeyButton code="KeyG" label="G" isClicked={isClicked.has("KeyG")} isPressed={pressedKeys.has("KeyG")} />
        <KeyButton code="KeyH" label="H" isClicked={isClicked.has("KeyH")} isPressed={pressedKeys.has("KeyH")} />
        <KeyButton code="KeyJ" label="J" isClicked={isClicked.has("KeyJ")} isPressed={pressedKeys.has("KeyJ")} />
        <KeyButton code="KeyK" label="K" isClicked={isClicked.has("KeyK")} isPressed={pressedKeys.has("KeyK")} />
        <KeyButton code="KeyL" label="L" isClicked={isClicked.has("KeyL")} isPressed={pressedKeys.has("KeyL")} />
        <KeyButton code="Semicolon" label=";" isClicked={isClicked.has("Semicolon")} isPressed={pressedKeys.has("Semicolon")} />
        <KeyButton code="Quote" label="'" isClicked={isClicked.has("Quote")} isPressed={pressedKeys.has("Quote")} />
        <KeyButton code="Enter" label="Enter" isClicked={isClicked.has("Enter")} isPressed={pressedKeys.has("Enter")} className="col-span-2" />
        {/* PgUp */}
        <KeyButton code="PageUp" label="PgUp" isClicked={isClicked.has("PageUp")} isPressed={pressedKeys.has("PageUp")} />
      </div>
      {/* Linha 4: 13 teclas */}
      <div className="flex gap-1 grid grid-cols-keyboard-compact">
        <KeyButton code="ShiftLeft" label="Shift" isClicked={isClicked.has("ShiftLeft")} isPressed={pressedKeys.has("ShiftLeft")} className="col-span-2" />
        <KeyButton code="KeyZ" label="Z" isClicked={isClicked.has("KeyZ")} isPressed={pressedKeys.has("KeyZ")} />
        <KeyButton code="KeyX" label="X" isClicked={isClicked.has("KeyX")} isPressed={pressedKeys.has("KeyX")} />
        <KeyButton code="KeyC" label="C" isClicked={isClicked.has("KeyC")} isPressed={pressedKeys.has("KeyC")} />
        <KeyButton code="KeyV" label="V" isClicked={isClicked.has("KeyV")} isPressed={pressedKeys.has("KeyV")} />
        <KeyButton code="KeyB" label="B" isClicked={isClicked.has("KeyB")} isPressed={pressedKeys.has("KeyB")} />
        <KeyButton code="KeyN" label="N" isClicked={isClicked.has("KeyN")} isPressed={pressedKeys.has("KeyN")} />
        <KeyButton code="KeyM" label="M" isClicked={isClicked.has("KeyM")} isPressed={pressedKeys.has("KeyM")} />
        <KeyButton code="Comma" label="," isClicked={isClicked.has("Comma")} isPressed={pressedKeys.has("Comma")} />
        <KeyButton code="Period" label="." isClicked={isClicked.has("Period")} isPressed={pressedKeys.has("Period")} />
        <KeyButton code="Slash" label="/" isClicked={isClicked.has("Slash")} isPressed={pressedKeys.has("Slash")} />
        <KeyButton code="ShiftRight" label="Shift" isClicked={isClicked.has("ShiftRight")} isPressed={pressedKeys.has("ShiftRight")} className="col-span-2" />
        <KeyButton code="ArrowUp" label="▲" isClicked={isClicked.has("ArrowUp")} isPressed={pressedKeys.has("ArrowUp")} />
        <KeyButton code="PageDown" label="PgDn" isClicked={isClicked.has("PageDown")} isPressed={pressedKeys.has("PageDown")} />
      </div>
      {/* Linha 5: 12 teclas */}
      <div className="flex gap-1 grid grid-cols-keyboard-compact">
        <KeyButton code="ControlLeft" label="Ctrl" isClicked={isClicked.has("ControlLeft")} isPressed={pressedKeys.has("ControlLeft")} className="col-span-2" />
        <KeyButton code="MetaLeft" label="Win" isClicked={isClicked.has("MetaLeft")} isPressed={pressedKeys.has("MetaLeft")} />
        <KeyButton code="AltLeft" label="Alt" isClicked={isClicked.has("AltLeft")} isPressed={pressedKeys.has("AltLeft")} />
        <KeyButton code="Space" label="Space" isClicked={isClicked.has("Space")} isPressed={pressedKeys.has("Space")} className="col-span-7" />
        <KeyButton code="AltRight" label="Alt" isClicked={isClicked.has("AltRight")} isPressed={pressedKeys.has("AltRight")} />
        <KeyButton code="FnRight" label="Fn" isClicked={isClicked.has("FnRight")} isPressed={pressedKeys.has("FnRight")} />
        <KeyButton code="ArrowLeft" label="◄" isClicked={isClicked.has("ArrowLeft")} isPressed={pressedKeys.has("ArrowLeft")} />
        <KeyButton code="ArrowDown" label="▼" isClicked={isClicked.has("ArrowDown")} isPressed={pressedKeys.has("ArrowDown")} />
        <KeyButton code="ArrowRight" label="►" isClicked={isClicked.has("ArrowRight")} isPressed={pressedKeys.has("ArrowRight")} />
      </div>
    </div>
  </div>
);