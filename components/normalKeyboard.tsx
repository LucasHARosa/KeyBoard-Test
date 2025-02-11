import { KeyButton } from "./keyButton";

interface KeyboardProps {
  pressedKeys: Set<string>;
}

export const NormalKeyboard = ({ pressedKeys }: KeyboardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <div className="space-y-2">
      {/* Linha de Funções: 16 "slots" */}
      <div className="flex gap-1 grid grid-cols-keyboard">
        <KeyButton code="Escape" label="Esc" isPressed={pressedKeys.has("Escape")} />
        <KeyButton code="F1" label="F1" isPressed={pressedKeys.has("F1")} />
        <KeyButton code="F2" label="F2" isPressed={pressedKeys.has("F2")} />
        <KeyButton code="F3" label="F3" isPressed={pressedKeys.has("F3")} />
        <KeyButton code="F4" label="F4" isPressed={pressedKeys.has("F4")} />
        <KeyButton code="F5" label="F5" isPressed={pressedKeys.has("F5")} />
        <KeyButton code="F6" label="F6" isPressed={pressedKeys.has("F6")} />
        <KeyButton code="F7" label="F7" isPressed={pressedKeys.has("F7")} />
        <KeyButton code="F8" label="F8" isPressed={pressedKeys.has("F8")} />
        <KeyButton code="F9" label="F9" isPressed={pressedKeys.has("F9")} />
        <KeyButton code="F10" label="F10" isPressed={pressedKeys.has("F10")} />
        <KeyButton code="F11" label="F11" isPressed={pressedKeys.has("F11")} />
        <KeyButton code="F12" label="F12" isPressed={pressedKeys.has("F12")} />
        <KeyButton code="PrintScreen" label="PrtSc" isPressed={pressedKeys.has("PrintScreen")} />
        <KeyButton code="ScrollLock" label="ScrLk" isPressed={pressedKeys.has("ScrollLock")} />
        <KeyButton code="Pause" label="Pause" isPressed={pressedKeys.has("Pause")} />
      </div>

      {/* Linha 2: 15 "slots" */}
      <div className="flex gap-1 grid grid-cols-keyboard">
        <KeyButton code="Backquote" label="`" isPressed={pressedKeys.has("Backquote")} />
        <KeyButton code="Digit1" label="1" isPressed={pressedKeys.has("Digit1")} />
        <KeyButton code="Digit2" label="2" isPressed={pressedKeys.has("Digit2")} />
        <KeyButton code="Digit3" label="3" isPressed={pressedKeys.has("Digit3")} />
        <KeyButton code="Digit4" label="4" isPressed={pressedKeys.has("Digit4")} />
        <KeyButton code="Digit5" label="5" isPressed={pressedKeys.has("Digit5")} />
        <KeyButton code="Digit6" label="6" isPressed={pressedKeys.has("Digit6")} />
        <KeyButton code="Digit7" label="7" isPressed={pressedKeys.has("Digit7")} />
        <KeyButton code="Digit8" label="8" isPressed={pressedKeys.has("Digit8")} />
        <KeyButton code="Digit9" label="9" isPressed={pressedKeys.has("Digit9")} />
        <KeyButton code="Digit0" label="0" isPressed={pressedKeys.has("Digit0")} />
        <KeyButton code="Minus" label="-" isPressed={pressedKeys.has("Minus")} />
        <KeyButton code="Equal" label="=" isPressed={pressedKeys.has("Equal")} />
        <KeyButton code="Backspace" label="Bksp" isPressed={pressedKeys.has("Backspace")} className="col-span-2" />
      </div>

      {/* Linha 3: 15 "slots" */}
      <div className="flex gap-1 grid grid-cols-keyboard">
        <KeyButton code="Tab" label="Tab" isPressed={pressedKeys.has("Tab")} className="col-span-2" />
        <KeyButton code="KeyQ" label="Q" isPressed={pressedKeys.has("KeyQ")} />
        <KeyButton code="KeyW" label="W" isPressed={pressedKeys.has("KeyW")} />
        <KeyButton code="KeyE" label="E" isPressed={pressedKeys.has("KeyE")} />
        <KeyButton code="KeyR" label="R" isPressed={pressedKeys.has("KeyR")} />
        <KeyButton code="KeyT" label="T" isPressed={pressedKeys.has("KeyT")} />
        <KeyButton code="KeyY" label="Y" isPressed={pressedKeys.has("KeyY")} />
        <KeyButton code="KeyU" label="U" isPressed={pressedKeys.has("KeyU")} />
        <KeyButton code="KeyI" label="I" isPressed={pressedKeys.has("KeyI")} />
        <KeyButton code="KeyO" label="O" isPressed={pressedKeys.has("KeyO")} />
        <KeyButton code="KeyP" label="P" isPressed={pressedKeys.has("KeyP")} />
        <KeyButton code="BracketLeft" label="[" isPressed={pressedKeys.has("BracketLeft")} />
        <KeyButton code="BracketRight" label="]" isPressed={pressedKeys.has("BracketRight")} />
        <KeyButton code="Backslash" label="\\" isPressed={pressedKeys.has("Backslash")} />
      </div>

      {/* Linha 4: 13 "slots" */}
      <div className="flex gap-1 grid grid-cols-keyboard">
        <KeyButton code="CapsLock" label="Caps" isPressed={pressedKeys.has("CapsLock")} className="col-span-2" />
        <KeyButton code="KeyA" label="A" isPressed={pressedKeys.has("KeyA")} />
        <KeyButton code="KeyS" label="S" isPressed={pressedKeys.has("KeyS")} />
        <KeyButton code="KeyD" label="D" isPressed={pressedKeys.has("KeyD")} />
        <KeyButton code="KeyF" label="F" isPressed={pressedKeys.has("KeyF")} />
        <KeyButton code="KeyG" label="G" isPressed={pressedKeys.has("KeyG")} />
        <KeyButton code="KeyH" label="H" isPressed={pressedKeys.has("KeyH")} />
        <KeyButton code="KeyJ" label="J" isPressed={pressedKeys.has("KeyJ")} />
        <KeyButton code="KeyK" label="K" isPressed={pressedKeys.has("KeyK")} />
        <KeyButton code="KeyL" label="L" isPressed={pressedKeys.has("KeyL")} />
        <KeyButton code="Semicolon" label=";" isPressed={pressedKeys.has("Semicolon")} />
        <KeyButton code="Quote" label="'" isPressed={pressedKeys.has("Quote")} />
        <KeyButton code="Enter" label="Enter" isPressed={pressedKeys.has("Enter")} className="col-span-2" />
      </div>

      {/* Linha 5: 13 "slots" */}
      <div className="flex gap-1 grid grid-cols-keyboard">
        <KeyButton code="ShiftLeft" label="Shift" isPressed={pressedKeys.has("ShiftLeft")} className="col-span-2" />
        <KeyButton code="KeyZ" label="Z" isPressed={pressedKeys.has("KeyZ")} />
        <KeyButton code="KeyX" label="X" isPressed={pressedKeys.has("KeyX")} />
        <KeyButton code="KeyC" label="C" isPressed={pressedKeys.has("KeyC")} />
        <KeyButton code="KeyV" label="V" isPressed={pressedKeys.has("KeyV")} />
        <KeyButton code="KeyB" label="B" isPressed={pressedKeys.has("KeyB")} />
        <KeyButton code="KeyN" label="N" isPressed={pressedKeys.has("KeyN")} />
        <KeyButton code="KeyM" label="M" isPressed={pressedKeys.has("KeyM")} />
        <KeyButton code="Comma" label="," isPressed={pressedKeys.has("Comma")} />
        <KeyButton code="Period" label="." isPressed={pressedKeys.has("Period")} />
        <KeyButton code="Slash" label="/" isPressed={pressedKeys.has("Slash")} />
        <KeyButton code="ShiftRight" label="Shift" isPressed={pressedKeys.has("ShiftRight")} className="col-span-2" />
      </div>

      {/* Linha 6: 8 "slots" */}
      <div className="grid grid-cols-8 gap-1">
        <KeyButton code="ControlLeft" label="Ctrl" isPressed={pressedKeys.has("ControlLeft")} />
        <KeyButton code="MetaLeft" label="Win" isPressed={pressedKeys.has("MetaLeft")} />
        <KeyButton code="AltLeft" label="Alt" isPressed={pressedKeys.has("AltLeft")} />
        <KeyButton code="Space" label="Space" isPressed={pressedKeys.has("Space")} className="col-span-3" />
        <KeyButton code="AltRight" label="Alt" isPressed={pressedKeys.has("AltRight")} />
        <KeyButton code="MetaRight" label="Win" isPressed={pressedKeys.has("MetaRight")} />
        <KeyButton code="ContextMenu" label="Menu" isPressed={pressedKeys.has("ContextMenu")} />
        <KeyButton code="ControlRight" label="Ctrl" isPressed={pressedKeys.has("ControlRight")} />
      </div>

      {/* Bloco de Navegação: 6 "slots" */}
      <div className="grid grid-cols-6 gap-1">
        <KeyButton code="Insert" label="Ins" isPressed={pressedKeys.has("Insert")} />
        <KeyButton code="Home" label="Home" isPressed={pressedKeys.has("Home")} />
        <KeyButton code="PageUp" label="PgUp" isPressed={pressedKeys.has("PageUp")} />
        <KeyButton code="Delete" label="Del" isPressed={pressedKeys.has("Delete")} />
        <KeyButton code="End" label="End" isPressed={pressedKeys.has("End")} />
        <KeyButton code="PageDown" label="PgDn" isPressed={pressedKeys.has("PageDown")} />
      </div>

      {/* Numpad: 17 teclas organizadas em blocos */}
      <div className="mt-2 space-y-1">
        {/* Bloco superior do Numpad */}
        <div className="flex gap-1 grid grid-cols-keyboard">
          <KeyButton code="NumLock" label="NumLk" isPressed={pressedKeys.has("NumLock")} />
          <KeyButton code="NumpadDivide" label="/" isPressed={pressedKeys.has("NumpadDivide")} />
          <KeyButton code="NumpadMultiply" label="*" isPressed={pressedKeys.has("NumpadMultiply")} />
          <KeyButton code="NumpadSubtract" label="-" isPressed={pressedKeys.has("NumpadSubtract")} />
        </div>
        {/* Bloco central superior */}
        <div className="flex gap-1 grid grid-cols-keyboard">
          <KeyButton code="Numpad7" label="7" isPressed={pressedKeys.has("Numpad7")} />
          <KeyButton code="Numpad8" label="8" isPressed={pressedKeys.has("Numpad8")} />
          <KeyButton code="Numpad9" label="9" isPressed={pressedKeys.has("Numpad9")} />
          <KeyButton code="NumpadAdd" label="+" isPressed={pressedKeys.has("NumpadAdd")} className="row-span-2" />
        </div>
        {/* Bloco central inferior */}
        <div className="flex gap-1 grid grid-cols-keyboard">
          <KeyButton code="Numpad4" label="4" isPressed={pressedKeys.has("Numpad4")} />
          <KeyButton code="Numpad5" label="5" isPressed={pressedKeys.has("Numpad5")} />
          <KeyButton code="Numpad6" label="6" isPressed={pressedKeys.has("Numpad6")} />
        </div>
        {/* Bloco inferior */}
        <div className="flex gap-1 grid grid-cols-keyboard">
          <KeyButton code="Numpad1" label="1" isPressed={pressedKeys.has("Numpad1")} />
          <KeyButton code="Numpad2" label="2" isPressed={pressedKeys.has("Numpad2")} />
          <KeyButton code="Numpad3" label="3" isPressed={pressedKeys.has("Numpad3")} />
          <KeyButton code="NumpadEnter" label="Enter" isPressed={pressedKeys.has("NumpadEnter")} className="row-span-2" />
        </div>
        <div className="flex gap-1 grid grid-cols-keyboard">
          <KeyButton code="Numpad0" label="0" isPressed={pressedKeys.has("Numpad0")} className="col-span-2" />
          <KeyButton code="NumpadDecimal" label="." isPressed={pressedKeys.has("NumpadDecimal")} />
        </div>
      </div>
    </div>
  </div>
);
