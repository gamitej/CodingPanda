import { FC } from "react";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";

interface MarkdownOverviewProps {
  height: string;
  content: string;
}

const MarkdownOverview: FC<MarkdownOverviewProps> = ({
  content,
  height = "80vh",
}) => {
  /**
   * TSX
   */
  return (
    <div className="preview overflow-auto" style={{ maxHeight: height }}>
      <div className="custom-html-style prose dark:prose-dark max-w-none">
        <div className="dark:text-gray-300">
          <Markdown
            children={content}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, className, children, ...props }) {
                return (
                  <code
                    {...props}
                    className={`${className} bg-gray-100 dark:bg-gray-800 p-1 rounded`}
                  >
                    {children}
                  </code>
                );
              },
              table({ children }) {
                return <table className="border-red-300">{children}</table>;
              },
              th({ children }) {
                return (
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-800 dark:border-gray-500 dark:bg-gray-200">
                    {children}
                  </th>
                );
              },
              td({ children }) {
                return (
                  <td className="px-4 py-2 border-t border-gray-300 dark:border-gray-700 dark:text-gray-400">
                    {children}
                  </td>
                );
              },
              li({ children }) {
                return (
                  <li className="list-disc list-inside dark:text-gray-400">
                    {children}
                  </li>
                );
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownOverview;
