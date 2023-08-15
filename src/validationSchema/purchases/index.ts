import * as yup from 'yup';

export const purchaseValidationSchema = yup.object().shape({
  delivery_address: yup.string().required(),
  buyer_id: yup.string().nullable(),
  product_id: yup.string().nullable(),
});
