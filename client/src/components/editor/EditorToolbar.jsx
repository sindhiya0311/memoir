import {
  Bold,
  Italic,
  Heading1,
  List,
  ListOrdered,
  Quote,
  Code2,
  Undo2,
  Redo2,
} from "lucide-react";

const EditorToolbar = ({ editor }) => {
  if (!editor) return null;

  const buttonClass = "rounded-lg p-2 transition hover:bg-slate-700";

  return (
    <div className="mb-4 flex flex-wrap gap-2 rounded-xl border border-white/10 bg-slate-900 p-2">
      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleBold().run()}
        type="button"
      >
        <Bold size={18} />
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        type="button"
      >
        <Italic size={18} />
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        type="button"
      >
        <Heading1 size={18} />
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        type="button"
      >
        <List size={18} />
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        type="button"
      >
        <ListOrdered size={18} />
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        type="button"
      >
        <Quote size={18} />
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        type="button"
      >
        <Code2 size={18} />
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().undo().run()}
        type="button"
      >
        <Undo2 size={18} />
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().redo().run()}
        type="button"
      >
        <Redo2 size={18} />
      </button>
    </div>
  );
};

export default EditorToolbar;
