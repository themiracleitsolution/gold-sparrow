import React from "react";

const RefundAndReturnsPolicy = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 my-8 space-y-4 text-base text-[#777]">
      <p className="text-[#555] text-2xl font-bold">Overview</p>
      <p>
        Our refund and returns policy lasts 30 days. If 30 days have passed
        since your purchase, we can’t offer you a full refund or exchange.
      </p>
      <p>
        To be eligible for a return, your item must be unused and in the same
        condition that you received it. It must also be in the original
        packaging.
      </p>
      <p>
        Several types of goods are exempt from being returned. Perishable goods
        such as food, flowers, newspapers or magazines cannot be returned. We
        also do not accept products that are intimate or sanitary goods,
        hazardous materials, or flammable liquids or gases.
      </p>
      <p>Additional non-returnable items:</p>
      <ul className="list-disc ml-5 space-y-3">
        <li>Gift cards</li>
        <li>Downloadable software products</li>
        <li>Some health and personal care items</li>
      </ul>
      <p>To complete your return, we require a receipt or proof of purchase.</p>
      <p>Please do not send your purchase back to the manufacturer.</p>
      <p>
        There are certain situations where only partial refunds are granted:
      </p>
      <ul className="list-disc ml-5 space-y-3">
        <li>Book with obvious signs of use</li>
        <li>
          CD, DVD, VHS tape, software, video game, cassette tape, or vinyl
          record that has been opened.
        </li>
        <li>
          Any item not in its original condition, is damaged or missing parts
          for reasons not due to our error.
        </li>
        <li>Any item that is returned more than 30 days after delivery</li>
      </ul>
      <p className="text-[#555] text-2xl font-bold">Refunds</p>
      <p>
        Once your return is received and inspected, we will send you an email to
        notify you that we have received your returned item. We will also notify
        you of the approval or rejection of your refund.
      </p>
      <p>
        If you are approved, then your refund will be processed, and a credit
        will automatically be applied to your credit card or original method of
        payment, within a certain amount of days.
      </p>
      <div>
        <p className="font-bold">Late or missing refunds</p>
        <p>
          If you haven’t received a refund yet, first check your bank account
          again.
        </p>
      </div>
      <p>
        Then contact your credit card company, it may take some time before your
        refund is officially posted.
      </p>
      <p>
        Next contact your bank. There is often some processing time before a
        refund is posted.
      </p>
      <p>
        If you’ve done all of this and you still have not received your refund
        yet, please contact us at {"{email address}"}.
      </p>
      <div>
        <p className="font-bold">Sale items</p>
        <p>
          Only regular priced items may be refunded. Sale items cannot be
          refunded.
        </p>
      </div>
      <p className="text-[#555] text-2xl font-bold">Exchanges</p>
      <p>
        We only replace items if they are defective or damaged. If you need to
        exchange it for the same item, send us an email at {"{email address}"}{" "}
        and send your item to: {"{physical address}"}.
      </p>
      <p className="text-[#555] text-2xl font-bold">Gifts</p>
      <p>
        If the item was marked as a gift when purchased and shipped directly to
        you, you’ll receive a gift credit for the value of your return. Once the
        returned item is received, a gift certificate will be mailed to you.
      </p>
      <p>
        If the item wasn’t marked as a gift when purchased, or the gift giver
        had the order shipped to themselves to give to you later, we will send a
        refund to the gift giver and they will find out about your return.
      </p>
      <p className="text-[#555] text-2xl font-bold">Shipping returns</p>
      <p>
        To return your product, you should mail your product to:{" "}
        {"{physical address}"}.
      </p>
      <p>
        You will be responsible for paying for your own shipping costs for
        returning your item. Shipping costs are non-refundable. If you receive a
        refund, the cost of return shipping will be deducted from your refund.
      </p>
      <p>
        Depending on where you live, the time it may take for your exchanged
        product to reach you may vary.
      </p>
      <p>
        If you are returning more expensive items, you may consider using a
        trackable shipping service or purchasing shipping insurance. We don’t
        guarantee that we will receive your returned item.
      </p>
      <p className="text-[#555] text-2xl font-bold">Need help?</p>
      <p>
        Contact us at {"{email}"} for questions related to refunds and returns.
      </p>
    </div>
  );
};

export default RefundAndReturnsPolicy;
