import * as Yup from "yup";

export const campaignSchema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório'),
    author: Yup.string().required('Author é obrigatório'),
    image: Yup.string().required('Imagem é obrigatório'),
    type: Yup.string().required('Tipo de conversão é obrigatório'),
    bid: Yup.number().required('Lance é obrigatório'),
    segmentation: Yup.string().required('segmentação/região é obrigatório'),
    createdAt: Yup.date()
  });
