"use client";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

const silverTheme = {
    base: 'vs-dark', 
    inherit: true,
    rules: [
        { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
        { token: 'keyword', foreground: '569CD6', fontStyle: 'bold' },
        { token: 'variable', foreground: '9CDCFE' },
        { token: 'function', foreground: 'DCDCAA' },
    ],
    colors: {
        'editor.background': '#0d0d0d', 
        'editor.foreground': '#C0C0C0',
        'editorCursor.foreground': '#FFFFFF', 
        'editor.lineHighlightBackground': '#333333', 
        'editor.selectionBackground': '#264F78', 
        'editor.inactiveSelectionBackground': '#8C8C8C', 
    }
};

export default function MonacoEditor({ code, setCode, onRunCode }) {
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        if (editor) {
            monaco.editor.defineTheme('silver-theme', silverTheme);
            editor.updateOptions({ theme: 'silver-theme' });
        }
    }, [editor]);

    const handleEditorMount = (editor) => {
        setEditor(editor);
    };

    const handleCodeChange = (value) => {
        setCode(value);
    };

    return (
        <>
            <Editor
                height="300px"
                language="javascript"
                value={code}
                onChange={handleCodeChange}
                onMount={handleEditorMount}
            />
            <button className="button run" onClick={onRunCode}>Run</button>
        </>
    );
}
