import { useState, useEffect } from 'react';
import './Form.css';

const TYPES = ['general', 'dad', 'knock-knock', 'programming'];

interface FormData {
  name: string;
  type: string;
  count: number;
}

export const Form = ({
  onSubmitData,
}: {
  onSubmitData: (data: FormData) => void;
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    type: '',
    count: 0,
  });

  const options = [];
  for (let i = 0; i < 10; i++) {
    options.push(i + 1);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitData(formData);
  };

  useEffect(() => {
    document.body.className = 'light-bgr';
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Your name
        <input
          className="form__input"
          name="name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </label>
      <br />
      <label className="form__label">
        Select type of jokes
        <select
          className="form__input"
          name="name"
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          required
        >
          <option value="">Select one</option>
          {TYPES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label className="form__label">
        Select count of jokes
        <select
          className="form__input"
          name="name"
          onChange={(e) =>
            setFormData({ ...formData, count: Number(e.target.value) })
          }
          required
        >
          <option value="">Select one</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button className="form__button" type="submit">
        Show jokes
      </button>
    </form>
  );
};
