import WordsList from "./wordsList";

export default function WordsBar() {
    return (
        <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold text-gray-900">Words</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <WordsList></WordsList>
          </div>
          <div className="mt-5">
          </div>
        </div>
      </div>
    );
  }
  