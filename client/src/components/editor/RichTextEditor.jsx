import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { useEffect } from "react";

import EditorToolbar from "./EditorToolbar";

const RichTextEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],

    content: value,

    immediatelyRender: false,

    editorProps: {
      attributes: {
        class:
          "min-h-[300px] rounded-b-xl bg-slate-900 p-5 text-white outline-none",
      },
    },

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  return (
    <div className="rounded-xl border border-white/10">
      <EditorToolbar editor={editor} />

      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
