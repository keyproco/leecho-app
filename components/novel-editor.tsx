import React, { useRef }from "react";

import { type Editor as TipTapEditor } from "@tiptap/core";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";



type NovelEditorProps = {
  setContent: any;
  title: string;
  content: string | undefined;
};

export default function NovelEditor({ setContent, content, title }: NovelEditorProps) {
  
  return (
        <div>
            <h2 className="pt-4 pb-3">{title}</h2>
                {/* <Editor

                defaultValue={{
                    type: "doc",
                    content: [],
                }}
                onDebouncedUpdate={(editor?: TipTapEditor) => {
                    setContent(editor?.getHTML());
                }}
                disableLocalStorage={true}
                className="rounded-md border shadow-none"
                extensions={[
                  ]}
                /> */}
        </div>

  );
}

