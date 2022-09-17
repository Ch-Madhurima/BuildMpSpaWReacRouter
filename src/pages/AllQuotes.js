import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "madhu", text: "Learning  React Is Fun" },
  { id: "q2", author: "madhurima ch", text: "React is Great" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}> </QuoteList>;
};
export default AllQuotes;
