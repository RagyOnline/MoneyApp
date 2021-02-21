export class Budgets {
        id: string;
        name: string;
        last_modified_on: Date;
        first_month: string;
        last_month: string;
        date_format: {
          format: string;
        };
        currency_format: {
          iso_code: string;
          example_format: string;
          decimal_digits: 0;
          decimal_separator: string;
          symbol_first: boolean;
          group_separator: string;
          currency_symbol: string;
          display_symbol: boolean
        };
        accounts: Accounts[] = [];
        payees: Payees[] = [];
        payee_locations: PayeesLocation[] = [];
        category_groups: CategoryGroups[] = [];
        categories: Categories[] = [];
        months: months[] = [];
        transactions: Transactions[] = [];
        subtransactions: Subtransactions[] = [];
        scheduled_transactions: scheduledSubtransactions[] = [];
        scheduled_subtransactions: scheduledSubSubtransactions[] = [];
}
export class Accounts{
  id: string;
  name: string;
  type: "checking";
  on_budget: boolean;
  closed: boolean;
  note: string;
  balance: 0;
  cleared_balance: 0;
  uncleared_balance: 0;
  transfer_payee_id: string;
  deleted: boolean
}
export class Payees{
  id: string;
  name: string;
  transfer_account_id: string;
  deleted: boolean
}
export class PayeesLocation{
  id: string;
  payee_id: string;
  latitude: string;
  longitude: string;
  deleted: boolean
}
export class CategoryGroups{
  id: string;
  name: string;
  hidden: boolean;
  deleted: boolean
}
export class Categories{
  id: string;
  category_group_id: string;
  name: string;
  hidden: boolean;
  original_category_group_id: string;
  note: string;
  budgeted: 0;
  activity: 0;
  balance: 0;
  goal_type: "TB";
  goal_creation_month: string;
  goal_target: 0;
  goal_target_month: string;
  goal_percentage_complete: 0;
  goal_months_to_budget: 0;
  goal_under_funded: 0;
  goal_overall_funded: 0;
  goal_overall_left: 0;
  deleted: boolean
}
export class months{
  month: string;
  note: string;
  income: 0;
  budgeted: 0;
  activity: 0;
  to_be_budgeted: 0;
  age_of_money: 0;
  deleted: boolean;
  categories: Categories[] = [];
}
export class Transactions{
  id: string;
  date: string;
  amount: 0;
  memo: string;
  cleared: "cleared";
  approved: boolean;
  flag_color: "red";
  account_id: string;
  payee_id: string;
  category_id: string;
  transfer_account_id: string;
  transfer_transaction_id: string;
  matched_transaction_id: string;
  import_id: string;
  deleted: boolean
}
export class Subtransactions{
  id: string;
  transaction_id: string;
  amount: 0;
  memo: string;
  payee_id: string;
  payee_name: string;
  category_id: string;
  category_name: string;
  transfer_account_id: string;
  transfer_transaction_id: string;
  deleted: boolean
}
export class scheduledSubtransactions{
  id: string;
  date_first: string;
  date_next: string;
  frequency: never;
  amount: 0;
  memo: string;
  flag_color: "red";
  account_id: string;
  payee_id: string;
  category_id: string;
  transfer_account_id: string;
  deleted: boolean
}
export class scheduledSubSubtransactions{
  id: string;
  scheduled_transaction_id: string;
  amount: 0;
  memo: string;
  payee_id: string;
  category_id: string;
  transfer_account_id: string;
  deleted: boolean
}
