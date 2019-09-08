import * as L from "partial.lenses";
import response from "./fixtures/response.js";
import daggy from "daggy";

/***
 *
 * Setting daggy using Partial Lenses on available and sale attributes
 *
 */

const Available = daggy.taggedSum("Available", {
  Yes: [],
  No: []
});
const Sale = daggy.taggedSum("Sale", {
  Yes: [],
  No: []
});
const transformAvailable = r =>
  L.transform(
    [
      "skus",
      L.elems,
      L.ifElse(
        elem =>
          L.get(
            L.compose(
              L.prop("deep"),
              L.prop("checkme")
            ),
            elem
          ),
        L.assignOp({ isAvailable: Available.Yes.toString() }),
        L.assignOp({ isAvailable: Available.No.toString() })
      )
    ],
    r
  );
const transformSale = r =>
  L.transform(
    [
      "skus",
      L.elems,
      L.ifElse(
        elem => elem.sale === true,
        L.assignOp({ OnSale: Sale.Yes.toString() }),
        L.assignOp({ OnSale: Sale.No.toString() })
      )
    ],
    r
  );
const transformedResponse = response
  .map(x => transformAvailable(x))
  .map(x => transformSale(x)); //?

transformedResponse.map(x => console.log(x.skus));
